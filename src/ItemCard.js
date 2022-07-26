import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

const ItemCard = ({itemName, brand, stock, price, logo}) => {
    return (
        <View style={styles.itemCard}>
          <Image style={styles.square} source={{ uri: logo }} />
          <View style={styles.textBox}>
            <Text>{itemName}</Text>
            <Text>{brand}</Text>
          </View>
          <View style={styles.infoBox}>
            <Text>Stock:{stock}</Text>
            <Text>${price}</Text>
          </View>
        </View>
    );
}


const styles = StyleSheet.create({
    square : {
      width : 50,
      height : 50,
      borderRadius : 5
    },
    itemCard : {
      marginTop : 5,
      width : "95%",
      backgroundColor : "#ffffff",
      flexDirection : 'row',
      borderWidth : 0.5,
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