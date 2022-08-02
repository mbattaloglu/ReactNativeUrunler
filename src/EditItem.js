import {Text, StyleSheet, View, TextInput, ToastAndroid} from 'react-native';
import React, {useState, useEffect} from 'react';
import CustomButton from './components/CustomButton';
import {style} from './styles/style';

const EditItem = ({navigation, route}) => {
  const {itemId} = route.params;
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${itemId}`)
      .then(res => res.json())
      .then(res => setItem(res));
  }, [item]);
  const [item, setItem] = useState({});

  const saveItem = () => {
    ToastAndroid.show('Kaydedildi', ToastAndroid.SHORT);
    navigation.goBack();
  };
  const deleteItem = () => {
    ToastAndroid.show('Silindi', ToastAndroid.SHORT);
    navigation.navigate('ListItems');
  };
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 36, color: 'black'}}>
        Ürünü Düzenle
      </Text>
      <View style={styles.description}>
        <View style={styles.editBox}>
          <Text style={styles.descriptionText}>Ürün İsmi:</Text>
          <TextInput style={styles.inputBox} placeholder="Ürün İsmi">{item.title}</TextInput>
        </View>
        <View style={styles.editBox}>
          <Text style={styles.descriptionText}>Marka:</Text>
          <TextInput style={styles.inputBox} placeholder="Marka">{item.brand}</TextInput>
        </View>
        <View style={styles.editBox}>
          <Text style={styles.descriptionText}>Kategori:</Text>
          <TextInput style={styles.inputBox} placeholder="Kategori">{item.category}</TextInput>
        </View>
        <View style={styles.editBox}>
          <Text style={styles.descriptionText}>Fiyat:</Text>
          <TextInput style={styles.inputBox} placeholder="Fiyat">{item.price}</TextInput>
        </View>
        <View style={styles.editBox}>
          <Text style={styles.descriptionText}>Stok:</Text>
          <TextInput style={styles.inputBox} placeholder="Stok">{item.stock}</TextInput>
        </View>
        <View style={styles.editBox}>
          <Text style={styles.descriptionText}>İndirim Oranı:</Text>
          <TextInput style={styles.inputBox}>
            {parseInt(item.discountPercentage)}
          </TextInput>
        </View>
        <View style={styles.editBox}>
          <Text style={styles.descriptionText}>Açıklama:</Text>
          <TextInput style={styles.inputBox}>{item.description}</TextInput>
        </View>
        <View style={styles.buttons}>
          <CustomButton title="Kaydet" onClickHandler={saveItem} boxStyle={styles.button} titleStyle={styles.buttonTitle}/>
          <CustomButton title="Sil" onClickHandler={deleteItem} boxStyle={styles.button} titleStyle={styles.buttonTitle}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
  },
  descriptionText: {
    fontSize: 22,
    color: 'black',
    marginTop: 2,
    marginBottom: 2,
  },
  editBox: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth : 1,
  },
  inputBox: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    marginLeft: 5,
    fontSize: 18,
    
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 15,
    borderRadius : 5,
    height : 25,
    width : 100,
  },
  buttonTitle : {
    fontSize: 16,
  }
});

export default EditItem;
