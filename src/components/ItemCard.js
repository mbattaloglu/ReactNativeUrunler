import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ItemCard = ({itemName, brand, stock, price, logo, onClickHandler}) => {
  return (
    <TouchableOpacity onPress={onClickHandler}>
      <View style={styles.itemCard} onPress={onClickHandler}>
        <Image style={styles.square} source={{uri: logo}} />
        <View style={styles.textBox}>
          <Text style={styles.itemName}>{itemName}</Text>
          <Text style={styles.brand}>{brand}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.stock}>Stok:{stock}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 60,
    height: 58,
  },
  itemCard: {
    marginTop: 5,
    height: 60,
    width: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000000',
  },
  textBox: {
    marginLeft: 5,
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 17,
    color: '#000000',
  },
  brand: {
    fontSize: 15,
    color: '#000000',
  },
  stock: {
    fontSize: 15,
    color: '#000000',
  },
  price: {
    textAlign: 'right',
    color: '#000000',
  },
  description: {
    fontSize: 18,
    color: '#000000',
  },
  infoBox: {
    marginRight: 5,
    justifyContent: 'space-between',
    marginLeft: 'auto',
  },
});

export default ItemCard;
