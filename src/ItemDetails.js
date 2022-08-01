import {Text, StyleSheet, View, Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import CustomButton from './CustomButton';
import { useNavigation } from '@react-navigation/native';

const ItemDetails = ({navigation, route}) => {
  const {itemId} = route.params;
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${itemId}`)	
        .then(res => res.json())
        .then(res => setItem(res));
    }, [item]);
    const [item, setItem] = useState({});

    const discountedPrice = parseInt(item.price - (item.price * item.discountPercentage / 100));
    
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{uri:item.thumbnail}}></Image>
          <Text style={styles.imageText}>{item.rating}</Text>
        </View>
        <View style={styles.name}>
          <Text style={styles.nameText}>{item.title}</Text>
          <View style={styles.price}>
            <Text style={styles.priceText}>${item.price}</Text>
            <Text style={styles.discountedPriceText}> ${discountedPrice}</Text>
          </View>
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Marka:{item.title}</Text>
        <Text style={styles.descriptionText}>Kategori:{item.category}</Text>
        <Text style={styles.descriptionText}>Stok:{item.stock}</Text>
        <Text style={styles.descriptionText}>İndirim Oranı:%{parseInt(item.discountPercentage)}</Text>
        <Text style={styles.descriptionText}>Açıklama:{item.description}</Text>
        <View style={styles.buttons}>
          <CustomButton boxStyle={styles.button} title={'Düzenle'} onClickHandler={ () => {navigation.navigate("EditItem", { itemId : item.id})}} />
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
  imageBox: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  imageText: {
    textAlign: 'center',
    fontSize: 20,
  },
  name: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    flexDirection: 'row',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  priceText: {
    fontSize: 18,
    color: 'black',
    textDecorationLine: 'line-through',
  },
  discountedPriceText: {
    fontSize: 20,
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

export default ItemDetails;
