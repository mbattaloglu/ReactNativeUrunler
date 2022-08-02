import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#3232ff',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
  },
});
