import {Text, StyleSheet, View, Image} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import CustomButton from './components/CustomButton';
import Header from './components/Header';
import {AuthContext} from './config/Context';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <View style={styles.header}>
        <Image style={styles.image} source={{uri: user.image}}></Image>
        <View style={styles.name}>
          <Text style={styles.nameText}>
            {user.firstName} {user.maidenName} {user.lastName}
          </Text>
        </View>
      </View>
      <View style={styles.description}>
        <View style={styles.descriptionBox}>
          <AntDesignIcon
            name="mail"
            size={32}
            style={{marginRight: 20, color: '#000000'}}></AntDesignIcon>
          <Text style={{fontSize: 22, color: '#000000'}}>{user.email}</Text>
        </View>
        <View style={styles.descriptionBox}>
          <AntDesignIcon
            name="phone"
            size={32}
            style={{marginRight: 20, color: '#000000'}}></AntDesignIcon>
          <Text style={{fontSize: 22, color: '#000000'}}>{user.phone}</Text>
        </View>
        <View style={styles.buttons}>
          <CustomButton
            boxStyle={styles.button}
            titleStyle={styles.buttonTitle}
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
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#000000',
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
    width : "100%",
    justifyContent: 'center',
  },
  button: {
    marginTop : 10,
    borderRadius: 5,
    height: 40,
    width: "100%",
  },
  descriptionBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  buttonTitle: {
    fontSize: 18,
  },
});

export default Profile;
