import {Text, StyleSheet, View, Image} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import CustomButton from './CustomButton';
import Header from './Header';
import {AuthContext} from './Context';

const Profile = ({navigation}) => {
  const {signOut} = useContext(AuthContext);
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${global.userId}`)
      .then(res => res.json())
      .then(res => setItem(res));
  }, [user]);
  const [user, setItem] = useState({});

  return (
    <View>
      <Header title={'Profil'} />
      <View style={styles.header}>
        <Image style={styles.image} source={{uri: user.image}}></Image>
        <View style={styles.name}>
          <Text style={styles.nameText}>
            {user.firstName} {user.maidenName} {user.lastName}
          </Text>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Yaş:{user.age}</Text>
        <Text style={styles.descriptionText}>
          Telefon Numarası:{user.phone}
        </Text>
        <Text style={styles.descriptionText}>Eposta:{user.email}</Text>
        <Text style={styles.descriptionText}>Şirket:{user.name}</Text>
        <View style={styles.buttons}>
          <CustomButton
            boxStyle={styles.button}
            title={'Çıkış Yap'}
            onClickHandler={signOut}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  name: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  descriptionText: {
    fontSize: 24,
    color: 'black',
    marginTop: 2,
    marginBottom: 2,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 15,
  },
});

export default Profile;
