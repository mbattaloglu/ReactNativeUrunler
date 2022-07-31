import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ItemCard from './ItemCard';

const Items = ({searchPhrase, data}) => {

  const renderItem = ({item}) => {
    if (searchPhrase === '') {
      return (
        <ItemCard
          itemName={item.title}
          brand={item.brand}
          stock={item.stock}
          price={item.price}
          logo={item.thumbnail}
        />
      );
    }
    if (item.title.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))) {
      return (
        <ItemCard
          itemName={item.title}
          brand={item.brand}
          stock={item.stock}
          price={item.price}
          logo={item.thumbnail}
        />
      );
    }
    if (item.brand.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))) {
      return (
        <ItemCard
          itemName={item.title}
          brand={item.brand}
          stock={item.stock}
          price={item.price}
          logo={item.thumbnail}
        />
      );
    }
    if (item.category.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))) {
      return (
        <ItemCard
          itemName={item.title}
          brand={item.brand}
          stock={item.stock}
          price={item.price}
          logo={item.thumbnail}
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
