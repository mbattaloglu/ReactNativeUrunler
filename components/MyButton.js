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
        width: 114,
        height: 56,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight:'bold'
    }
})

export default MyButton;