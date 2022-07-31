import {View, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomSearchBar from './CustomSearchBar';
import Items from './Items';
import Header from './Header';
import CustomButton from './CustomButton';

const ListItems = ({navigation}) => {
  const SORT_STATE = {
    DEFAULT: 0,
    SORT_NAME_ASC: 1,
    SORT_NAME_DESC: 2,
    SORT_BRAND_ASC: 3,
    SORT_BRAND_DESC: 4,
    SORT_PRICE_ASC: 5,
    SORT_PRICE_DESC: 6,
  };

  let ACTUAL_STATE = SORT_STATE.DEFAULT;

  const [searchPhrase, setSearchPhrase] = useState('');
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [nameSortingState, setNameSortingState] = useState(0);
  const [brandSortingState, setBrandSortingState] = useState(0);
  const [priceSortingState, setPriceSortingState] = useState(0);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => setProducts(res.products));
  }, [products]);

  const [products, setProducts] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState(JSON.parse(JSON.stringify(products)));

  const sortByName = () => {
    if (nameSortingState === 0) {
      ACTUAL_STATE = SORT_STATE.SORT_NAME_ASC;
      setNameSortingState(1);
    } else if (nameSortingState === 1) {
      ACTUAL_STATE = SORT_STATE.SORT_NAME_DESC;
      setNameSortingState(2);
    } else if (nameSortingState === 2) {
      ACTUAL_STATE = SORT_STATE.DEFAULT;
      setNameSortingState(0);
    }
    setBrandSortingState(0);
    setPriceSortingState(0);
    sort();
  };

  const sortByBrand = () => {
    if (brandSortingState === 0) {
      ACTUAL_STATE = SORT_STATE.SORT_BRAND_ASC;
      setBrandSortingState(1);
    } else if (brandSortingState === 1) {
      ACTUAL_STATE = SORT_STATE.SORT_BRAND_DESC;
      setBrandSortingState(2);
    } else if (brandSortingState === 2) {
      ACTUAL_STATE = SORT_STATE.DEFAULT;
      setBrandSortingState(0);
    }
    setNameSortingState(0);
    setPriceSortingState(0);
    sort();
  };

  const sortByPrice = () => {
    if (priceSortingState === 0) {
      ACTUAL_STATE = SORT_STATE.SORT_PRICE_ASC;
      setPriceSortingState(1);
    } else if (priceSortingState === 1) {
      ACTUAL_STATE = SORT_STATE.SORT_PRICE_DESC;
      setPriceSortingState(2);
    } else if (priceSortingState === 2) {
      ACTUAL_STATE = SORT_STATE.DEFAULT;
      setPriceSortingState(0);
    }
    setNameSortingState(0);
    setBrandSortingState(0);
    sort();
  };

  const sort = () => {
    switch (ACTUAL_STATE) {
      case SORT_STATE.DEFAULT:
        setProducts(JSON.parse(JSON.stringify(defaultProducts)));
        break;
      case SORT_STATE.SORT_NAME_ASC:
        products.sort((a, b) => a.title < b.title);
        break;
      case SORT_STATE.SORT_NAME_DESC:
        products.sort((a, b) => b.title < a.title);
        break;
      case SORT_STATE.SORT_BRAND_ASC:
        products.sort((a, b) => a.brand < b.brand);
        break;
      case SORT_STATE.SORT_BRAND_DESC:
        products.sort((a, b) => b.brand < a.brand);
        break;
      case SORT_STATE.SORT_PRICE_ASC:
        products.sort((a, b) => a.price < b.price);
        break;
      case SORT_STATE.SORT_PRICE_DESC:
        products.sort((a, b) => b.price < a.price);
        break;
    }
    forceUpdate();
  };

  
  useEffect(() => {
    const loggedIn = false;
    if (!loggedIn) {
      navigation.navigate('Login');
    }
  }, []);

  return (
    <View style={styles.body}>
      <Header title={'Items'} />
      <View style={styles.buttonBox}>
        <CustomButton
          boxStyle={styles.button}
          titleStyle={styles.buttonTitle}
          title={'Ada göre Sırala'}
          onClickHandler={sortByName}
        />
        <CustomButton
          boxStyle={styles.button}
          titleStyle={styles.buttonTitle}
          title={'Markaya göre Sırala'}
          onClickHandler={sortByBrand}
        />
        <CustomButton
          boxStyle={styles.button}
          titleStyle={styles.buttonTitle}
          title={'Fiyata göre Sırala'}
          onClickHandler={sortByPrice}
        />
      </View>
      <CustomSearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      <Items searchPhrase={searchPhrase} data={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  button: {
    width: 134,
    height: 30,
    marginLeft: 1,
    marginRight: 1,
  },
  buttonTitle: {
    fontSize: 11,
    textTransform: 'uppercase',
  },
  buttonBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
  },
});

export default ListItems;
