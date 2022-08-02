import React from "react"
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";

import { Icons } from "./Constants";

export const LineBox = ({ baslik, icon, iconArkaRenk, komut, stil }) => {
    return (
        <TouchableOpacity
            style={[stiller1.cikis, stil]}
            onPress={komut}>
            <View style={[stiller1.cikisIcon, { backgroundColor: iconArkaRenk }]}>
                <Image
                    source={icon}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: 'white',
                    }}
                />
            </View>
            <Text style={stiller1.cikisMetin}>{baslik}</Text>
            <Image
                source={Icons.right}
                style={{
                    height: 15,
                    width: 15,
                    tintColor: 'gray',
                }}
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