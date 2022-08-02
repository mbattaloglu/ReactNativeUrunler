import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { Icons } from "./Constants";

import { AuthContext } from '../Context';


const CheckBox = () => {

    const { rememberA } = useContext(AuthContext);

    const [isPressed, setIsPressed] = useState(false);

    return (

        <TouchableOpacity
            style={styles.box}
            onPress={() => [setIsPressed(!isPressed), /*rememberA({bool: !isPressed})*/]}
        >
            {
                isPressed ? (
                    <Image source={Icons.tick} style={{ width: 20, height: 20 }} />
                ) : (
                    <></>
                )
            }
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    box: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        borderRadius: 4,
        marginLeft: 5,
    }
})

export default CheckBox;