import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const IconButton = ({ icon, command }) => {
    return (
        <TouchableOpacity
            style={styles.shape}
            onPress={command}
        >
            <Image
                source={icon}
                style={{
                    height: 17,
                    width: 17,
                    tintColor: 'white',
                }}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shape: {
        width: 34,
        height: 34,
        borderRadius: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default IconButton;