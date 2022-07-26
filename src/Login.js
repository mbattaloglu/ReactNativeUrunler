import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Buton from './Buton';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [products, setProduts] = useState([]);

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
      setErrorText('Yanlış kullanıcı adı veya şifre');
      console.log('Yanlış');
    } else {
      navigation.navigate('Items');
      console.log('Doğru');
    }
  };
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Giriş Yap</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder=" Kullanıcı Adı"
          onChangeText={value => setUsername(value)}></TextInput>
      </View>
      <TextInput
        style={styles.input}
        placeholder=" Şifre"
        secureTextEntry
        onChangeText={value => setPassword(value)}></TextInput>
      <Text style={styles.errorInfo}>{errorText}</Text>
      <View style={styles.button}>
        <Buton metin={'Giriş Yap'} komut={loginHandler} />
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
