import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import MyButton from '../components/MyButton';
import { AuthContext } from '../Context';

const Login = ({ navigation }) => {

  const { signIn } = useContext(AuthContext)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const loginHandler = async () => {
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
      signIn();
      console.log('Correct');
    }
  };
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Login</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder=" Username"
          onChangeText={value => setUsername(value)}></TextInput>
      </View>
      <TextInput
        style={styles.input}
        placeholder=" Password"
        secureTextEntry
        onChangeText={value => setPassword(value)}></TextInput>
      <Text style={styles.errorInfo}>{errorText}</Text>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <MyButton text={'Admin'} command={() => signIn()} />
        <MyButton text={'Login'} command={loginHandler} />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#728180',
    paddingTop: 40,
    paddingHorizontal:20
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    marginBottom: 20
  },
  title: {
    marginBottom: 20,
    fontSize: 30,
    color: '#fff',
  },
  errorInfo: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#dd0000',
  },
});

export default Login;
