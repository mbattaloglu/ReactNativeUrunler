import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import CustomSearchBar from './CustomSearchBar';
import Items from './Items';
import Header from './Header';
import CustomButton from './CustomButton';

const ListItems = ({navigation}) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  /*
  useEffect(() => {
    const loggedIn = false;
    if (!loggedIn) {
      navigation.navigate('Login');
    }
  }, []);
*/
  return (
    <View>
      <Header title={"Items"}/>
      <View style={styles.buttonBox}>
        <CustomButton boxStyle={styles.button} titleStyle={styles.buttonTitle} title={"Ada göre Sırala"}/>
        <CustomButton boxStyle={styles.button} titleStyle={styles.buttonTitle} title={"Markaya göre Sırala"}/>
        <CustomButton boxStyle={styles.button} titleStyle={styles.buttonTitle} title={"Fiyata göre Sırala"}/>
      </View>
      <CustomSearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <Items searchPhrase={searchPhrase} />
    </View>
  );
};

const styles = StyleSheet.create({
  button : {
    width : 134,
    height : 30,
    marginLeft : 1,
    marginRight : 1
  },
  buttonTitle : {
    fontSize : 11,
    textTransform : "uppercase"
  },
  buttonBox : {
    justifyContent : "center",
    flexDirection : "row",
    marginBottom : 5,
    marginTop : 5
  }
});

export default ListItems;
