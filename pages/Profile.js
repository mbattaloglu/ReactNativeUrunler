import React, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

import { LineBox } from "../components/LineBox";

import { AuthContext } from "../Context";

import { Icons, info, UserInfo } from "../components/Constants";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {

    const { signOut } = useContext(AuthContext)

    const [info, setInfo] = useState([]);

    useEffect(() => {
        Load();
    }, [])

    const Load = () => {
        let value = UserInfo.id;
            fetch('https://dummyjson.com/users/' + value)
                .then(res => res.json())
                .then(res => setInfo(res))
    }

    return (
        <View style={{ flex: 1, paddingVertical: 10 }}>
            <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate("ProfileDetails", { info })} >
                <Image source={{ uri: info.image }} style={{ height: 90, width: 90, borderRadius: 50, borderWidth: 2, borderColor: 'gray' }} />
                <View style={{ marginRight: 75 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{info.username}</Text>
                    <Text>{info.email}</Text>
                </View>
                <Image source={Icons.right} style={{ height: 20, width: 20, tintColor: 'gray' }} />
            </TouchableOpacity>
            <View style={styles.line} />


            <LineBox
                baslik="Çıkış Yap"
                icon={Icons.exit}
                iconArkaRenk="#EB1D36"
                komut={() => {
                    signOut();
                }}
                stil={{ marginTop: 10 }}
            />

            <View style={styles.line} />

        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        backgroundColor: 'white',
        height: 100,
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    line: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'black',
    }
});

export default Profile;