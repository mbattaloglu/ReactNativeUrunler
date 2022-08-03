import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import { Icons } from './Constants';

const InfoBox = ({ itemName, price, discount, logo, command }) => {
    return (
        <TouchableOpacity
            style={{ marginBottom: 10, }}
            onPress={command}
        >
            <View style={styles.itemCard}>
                <Image style={styles.square}
                    source={{ uri: logo }} />

                <View style={styles.textBox}>
                    <View style={{ width: 217, height: 26 }}>
                            <Text style={{ fontWeight: '500', fontSize: 16, color: 'black' }}>{itemName}</Text>
                    </View>
                    <View style={{ paddingLeft: 5, flexDirection:'row', alignItems:'center' }}>
                        <Text style={{fontSize:10, color:'#e5383b', textDecorationLine:'line-through'}}>{price} </Text>
                        <Text style={{fontSize:14, color:'#a4161a', fontWeight:'bold'}}>{parseInt(parseInt(price) * (100 - discount) / 100)}$</Text>
                    </View>
                </View>

                <Image
                    source={Icons.right}
                    style={{
                        height: 15,
                        width: 15,
                        tintColor: 'black',
                        marginRight: 15
                    }}
                />
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    square: {
        width: 60,
        height: 60,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        opacity:.8,

    },
    itemCard: {
        marginTop: 5,
        height: 60,
        //backgroundColor: "#e0e0e0",
        borderWidth:1,
        flexDirection: 'row',
        borderRadius: 10,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textBox: {
        paddingRight: 20,
    },
});

export default InfoBox;