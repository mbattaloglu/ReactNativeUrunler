import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ProfileDetails = ({ route }) => {

    const { info } = route.params;

    return (
        <View style={{ marginHorizontal: 50 }}>
            <Image style={styles.image} source={{ uri: info.image }} />
            <Texts main={"First Name"} description={info.firstName} />
            <Texts main={"Last Name"} description={info.lastName} />
            <Texts main={"Age"} description={info.age} />
            <Texts main={"Gender"} description={info.gender} />
            <Texts main={"Email"} description={info.email} />
        </View>
    )
}

const Texts = ({ main, description }) => {
    return (
        <View style={{ marginBottom: 21}}>
            <Text style={styles.mainText}>
                {main}
            </Text>
            <View style={styles.descriptionBox}>
                <Text style={styles.descriptionText}>
                    {description}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50,
        marginVertical: 25,
        borderWidth: 2,
        borderColor: 'gray'
    },
    mainText: {
        fontSize: 16,
        color: 'black',
        fontWeight: '500'
    },
    descriptionText: {
        fontSize: 21,
        color: '#007ea7',
    },
    descriptionBox: {
        height: 35,
        width: '100%',
        borderWidth:1,
        borderColor:'black',
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default ProfileDetails;