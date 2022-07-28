import React, {useContext} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { LineBox } from "../components/LineBox";

import { AuthContext } from "../Context";

const Profile = () => {

    const { signOut } = useContext(AuthContext)

    return (
        <View>
            <LineBox
                baslik="Çıkış Yap"
                iconIsmi="log-out-outline"
                iconArkaRenk="#EB1D36"
                komut={() => {
                    signOut();
                }}
            />

            <View style={stiller.cizgi} />

            <LineBox
                baslik="Deneme"
                iconIsmi="bookmark-outline"
                iconArkaRenk="#457b9d"
                komut={() => {
                    alert("Selam")
                }}
                stil={{ marginTop: 20 }}
            />

            <LineBox
                baslik="Yardım"
                iconIsmi="information"
                iconArkaRenk="#5F7464"
                komut={() => {
                    alert("Selam")
                }}
            />

            <View style={stiller.cizgi} />


        </View>
    )
}

const stiller = StyleSheet.create({
    profil: {
        backgroundColor: 'white',
        marginTop: 15,
    },
    cizgi: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'black',
    }
});

export default Profile;