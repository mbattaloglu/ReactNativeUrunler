import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

const InfoBox = ({ itemName, brand, stock, price, logo, command }) => {
    return (
        <TouchableOpacity
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={command}
        >
            <View style={styles.itemCard}>
                <Image style={styles.square}
                    source={{ uri: logo }} />
                <View style={styles.textBox}>
                    <Text>{itemName}</Text>
                    <Text>{brand}</Text>
                </View>
                <View style={styles.infoBox}>
                    <Text>{stock}</Text>
                    <Text>{price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    square: {
        width: 50,
        height: 50,
        borderRadius: 5
    },
    itemCard: {
        marginTop: 5,
        width: "95%",
        backgroundColor: "#ffffff",
        flexDirection: 'row',
        borderWidth: 0.5,
        borderRadius: 5
    },
    textBox: {
        marginLeft: 5,
        justifyContent: 'space-between'
    },

    infoBox: {
        marginRight: 5,
        justifyContent: 'space-between',
        marginLeft: "auto"
    }
});

export default InfoBox;