import React, {useEffect, useState, useContext} from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import CustomButton from './CustomButton';
import Header from './Header';

import {AuthContext} from './Context';

const Login = ({navigation}) => {
  const {signIn} = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');

  const loginHandler = async () => {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const json = await res.json();
    if (json.message) {
      setErrorText('Yanlış kullanıcı adı veya şifre');
    } else {
      signIn({token: json.token});
      global.userId = json.id;
      console.log('Login success');
    }
  };
  return (
    <View style={styles.body}>
      <Header title={'Giriş Yap'} />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          onChangeText={value => setUsername(value)}></TextInput>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
        onChangeText={value => setPassword(value)}></TextInput>
      <Text style={styles.errorInfo}>{errorText}</Text>
      <View style={styles.button}>
        <CustomButton title={'Giriş Yap'} onClickHandler={loginHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#728180',
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
  },
  title: {
    marginTop: 20,
    marginLeft: 18,
    fontSize: 22,
    color: '#fff',
  },
  button: {
    width: '95%',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  errorInfo: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: '#dd0000',
  },
});

export default Login;
