import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

const ItemCard = ({itemName, brand, stock, price, logo, onClickHandler}) => {
    return (
      <TouchableOpacity
       onPress={onClickHandler}
      >
        <View style={styles.itemCard} onPress={onClickHandler}>
          <Image style={styles.square} source={{ uri: logo }} />
          <View style={styles.textBox}>
            <Text>{itemName}</Text>
            <Text>{brand}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={{textAlign:'right'}}>Stock:{stock}</Text>
            <Text style={{textAlign:'right'}}>${price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    square : {
      width : 48,
      height : 48,
      borderRadius : 5
    },
    itemCard : {
      marginTop : 5,
      width : "100%",
      backgroundColor : "#ffffff",
      flexDirection : 'row',
      borderWidth : 1,
    },
    textBox : {
      marginLeft : 5,
      justifyContent : 'space-between'
    },
    
    infoBox : {
      marginRight : 5,
      justifyContent : 'space-between',
      marginLeft : "auto"
    }
  });

export default ItemCard;