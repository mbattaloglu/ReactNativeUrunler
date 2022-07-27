import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import Buton from '../bilesenler/Buton';
import Liste from './Liste';

const GirisYap = ({ navigation }) => {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Log In</Text>
            <View>
                <TextInput style={styles.input} placeholder=" Kullanıcı Adı"></TextInput>
            </View>
            <TextInput style={styles.input} placeholder=" Şifre" secureTextEntry></TextInput>
            <Buton metin={"Giriş Yap"} komut={() => navigation.navigate("Liste")} />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%",
        backgroundColor: "#728180"
    },
    input: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    title: {
        marginTop: 20,
        marginLeft: 18,
        fontSize: 22,
        color: "#fff"
    },
});

export default GirisYap;