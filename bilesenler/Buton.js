import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const Buton = ({kutuStil, metinStil, metin, komut}) => {
    return (
        <TouchableOpacity onPress={komut}>
            <View style={[stiller.sekil, kutuStil]}>
                <Text style={[stiller.metin, metinStil]}>{metin}</Text>
            </View>
        </TouchableOpacity>
    )
}

const stiller = StyleSheet.create({
    sekil: {
        width: 130,
        height: 70,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center'
    },
    metin: {
        color: 'white',
        fontSize: 25,
        //fontWeight:'bold'
    }
})

export default Buton;