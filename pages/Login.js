import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, } from 'react-native';
import MyButton from '../components/MyButton';
import { AuthContext } from '../Context';

import { ThemeColors, Icons } from '../components/Constants';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {

  const { signIn } = useContext(AuthContext);

  //#region Get username and password from AsyncStorage
  const Load = async () => {
    try {
      const v_username = await AsyncStorage.getItem('username');
      if (v_username !== null)
        setUsername(v_username);
      const v_password = await AsyncStorage.getItem('password');
      if (v_password !== null)
        setPassword(v_password);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    Load();
  }, [])
  //#endregion

  const [isRemembered, setIsRemembered] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const loginHandler = async () => {

    //#region Check user's inputs
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const json = await res.json();
    if (json.message) {
      setErrorText('Incorrect username or password');
      console.log('Incorrect');
    } else {
      if (isRemembered) {
        try {
          await AsyncStorage.setItem('username', username);
          await AsyncStorage.setItem('password', password);
        } catch (e) {
          console.log(e);
        }
      }
      signIn({ user: json });
      console.log('Correct');
    }
    //#endregion

  };
  return (
    <View style={styles.body}>

      {/* Header Title */}
      <Text style={styles.title}>Login</Text>

      {/* Error */}
      <Text style={styles.errorInfo}>{errorText}</Text>

      {/* Username */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor='#858585'
        onChangeText={value => setUsername(value)}>{username}</TextInput>

      {/* Password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor='#858585'
        secureTextEntry
        onChangeText={value => setPassword(value)}>{password}</TextInput>

      {/* <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, marginTop: 10 }}> */}

        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => setIsRemembered(!isRemembered)}
        >
          <View style={styles.checkBox}>
            {
              isRemembered ? (
                <Image source={Icons.tick} style={{ width: 20, height: 20 }} />
              ) : (
                <></>
              )
            }

          </View>
          <Text style={{ marginLeft: 5, fontSize: 15 }}>Remember me</Text>
        </TouchableOpacity>


      {/* </View> */}

      <View style={{ marginTop: 10, alignItems: 'flex-end' }}>
        <MyButton text={'Login'} command={loginHandler} />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: ThemeColors.main,
    paddingTop: 42,
    paddingHorizontal: 64
  },
  input: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: 20,
  },
  title: {
    marginBottom: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  errorInfo: {
    textAlign: 'center',
    color: '#dd0000',
    marginBottom: 10
  },
  checkBox: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 4,
    marginLeft: 5,
  }
});

export default Login;
