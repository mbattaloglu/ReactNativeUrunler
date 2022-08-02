import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const CustomButton = ({boxStyle, titleStyle, title, onClickHandler}) => {
  return (
    <TouchableOpacity onPress={onClickHandler}>
      <View style={[styles.box, boxStyle]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#3232ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default CustomButton;
