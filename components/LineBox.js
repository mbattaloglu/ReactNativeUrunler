import React from "react"
import { StyleSheet, TouchableOpacity, View,Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'

export const LineBox = ({ baslik, iconIsmi, iconArkaRenk, komut, stil }) => {
    return (
        <TouchableOpacity
            style={[stiller1.cikis, stil]}
            onPress={komut}>
            <View style={[stiller1.cikisIcon, { backgroundColor: iconArkaRenk }]}>
                <Ionicons
                    name={iconIsmi}
                    size={25}
                    color={'white'}
                />
            </View>
            <Text style={stiller1.cikisMetin}>{baslik}</Text>
            <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={"gray"}
            />
        </TouchableOpacity>
    )
}

const stiller1 = StyleSheet.create({
    cikis: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 7,
    },
    cikisMetin: {
        color: 'black',
        marginLeft: 16,
        flex: 1
    },
    cikisIcon: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    }
});