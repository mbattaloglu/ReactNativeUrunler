import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const MyButton = ({boxStyle, textStyle, text, command}) => {
    return (
        <TouchableOpacity onPress={command}>
            <View style={[stiller.shape, boxStyle]}>
                <Text style={[stiller.text, textStyle]}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const stiller = StyleSheet.create({
    shape: {
        width: 130,
        height: 70,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        color: 'white',
        fontSize: 25,
        //fontWeight:'bold'
    }
})

export default MyButton;