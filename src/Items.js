import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ItemCard from './components/ItemCard';

const Items = ({searchPhrase, data}) => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {

    if (searchPhrase === '' || searchPhrase.length <= 2) {
      return (
        <ItemCard
          itemName={item.title}
          brand={item.brand}
          stock={item.stock}
          price={item.price}
          logo={item.thumbnail}
          onClickHandler={() => navigation.navigate("ItemDetails", { itemId:item.id })}
        />
      );
    }
    if (searchPhrase.length >=3 && item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))) {
      return (
        <ItemCard
          itemName={item.title}
          brand={item.brand}
          stock={item.stock}
          price={item.price}
          logo={item.thumbnail}
          onClickHandler={() => navigation.navigate("Details", { itemId:item.id })}
        />
      );
    }
    if (searchPhrase.length >=3 && item.brand.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))) {
      return (
        <ItemCard
          itemName={item.title}
          brand={item.brand}
          stock={item.stock}
          price={item.price}
          logo={item.thumbnail}
          onClickHandler={() => navigation.navigate("Details", { itemId:item.id })}
        />
      );
    }
    if (searchPhrase.length >=3 && item.category.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))) {
      return (
        <ItemCard
          itemName={item.title}
          brand={item.brand}
          stock={item.stock}
          price={item.price}
          logo={item.thumbnail}
          onClickHandler={() => navigation.navigate("Details", { itemId:item.id })}
        />
      );
    }
  };

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default Items;
