import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const CustomSearchBar = ({searchPhrase, setSearchPhrase}) => {
  return(
        <TextInput style={styles.input} placeholder={"Search"} value={searchPhrase} onChangeText={setSearchPhrase}/>
  ) 
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 50,
    paddingLeft: 10,
  },
});

export default CustomSearchBar;
