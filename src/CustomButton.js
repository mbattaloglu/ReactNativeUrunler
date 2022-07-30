import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const CustomButton = ({boxStyle, titleStyle, title, onClickHandler}) => {
    return (
        <TouchableOpacity onPress={onClickHandler}>
            <View style={[stiller.box, boxStyle]}>
                <Text style={[stiller.title, titleStyle]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const stiller = StyleSheet.create({
    box: {
        width: 130,
        height: 70,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight:'bold'
    }
})

export default CustomButton;