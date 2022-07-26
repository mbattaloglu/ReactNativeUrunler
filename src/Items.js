import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ItemCard from './ItemCard';

const Items = ({ navigation }) => {
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setProducts(res.products))
  }, [products]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loggedIn = false;
    if (!loggedIn) {
      navigation.navigate('Login');
    }
  }, []);
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <ItemCard
          itemName={item.title}
          brand={item.brand}
          stock={item.stock}
          price={item.price}
          logo={item.thumbnail}
        />
      )}
    />
  );
};


export default Items;
