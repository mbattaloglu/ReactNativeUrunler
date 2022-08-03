import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, Alert } from "react-native";

import MyButton from "../components/MyButton";

const Details = ({ navigation, route }) => {

    const { item } = route.params;// Gets values from other Screen

    return (
        <View style={styles.container}>

            {/* Header Line */}
            <View style={styles.headerLine}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.logo}
                        source={{ uri: item.thumbnail }}
                    />
                    <Text style={styles.rating}>{item.rating}</Text>

                </View>

                <View style={styles.headerText}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.stick} />
                    <View style={styles.priceLine}>
                        <Text style={styles.price}>{item.price}$</Text>
                        <Text style={styles.countPrice}>{parseInt(item.price * (100 - item.discountPercentage) / 100)}$</Text>
                    </View>
                </View>
            </View>

            {/* Middle Line */}
            <View style={styles.middleLine}>
                <Texts main={"Brand           :"} text={item.brand} />
                <Texts main={"Category     :"} text={item.category} />
                <Texts main={"Stock           :"} text={item.stock} />
                <Texts main={"Discount     :"} text={"%" + item.discountPercentage} />
                <Texts main={"Description :"} text={item.description}
                    addscroll={{ height: 100, borderRadius: 10, borderLeftWidth: 1, borderRightWidth: 1 }} />
            </View>

            {/* Buttons Line */}
            <View style={styles.buttonsLine}>
                <MyButton text={"Delete"}
                    boxStyle={{ height: 50 }}
                    command={() => Alert.alert(
                        'Warning',
                        'You are about to delete this product. Are you sure?', [{
                            text: 'Yes', onPress: () =>
                                [fetch('https://dummyjson.com/products/' + item.id, {
                                    method: 'DELETE',
                                })
                                    .then(res => res.json()).then(console.log),
                                navigation.goBack()]
                        }, { text: 'No' }]
                    )}
                />
                <MyButton text={"Edit"}
                    boxStyle={{ height: 50 }}
                    command={() => navigation.navigate('DetailsEdit', { item })}
                />

            </View>

        </View>

    )
}

const Texts = ({ main, text, addstyle, addscroll }) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            {/* Main Text */}
            <Text style={styles.textsMain}>{main} </Text>
            
            {/* Descriotion */}
            <ScrollView style={addscroll}>
                <Text style={[styles.textsText, addstyle]}>{text}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 25,
        marginVertical: 25,
    },
    logo: {
        width: 110,
        height: 110,
        borderRadius: 5,
        borderWidth: 2,
        opacity: .8,
        borderColor: 'black'
    },
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        width: 200,
        height: 40,
    },
    priceLine: {
        flexDirection: 'row',
        alignItems: 'center',
        color: '#8A817C'
    },
    price: {
        fontSize: 17,
        textDecorationLine: 'line-through',
        marginRight: 5,
        color: '#8A817C'
    },
    countPrice: {
        fontSize: 25,
    },
    rating: {
        fontSize: 20,
        color: '#463F3A'
    },
    headerLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,
    },
    headerText: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 25
    },
    stick: {
        backgroundColor: 'black',
        height: 1,
        width: 150
    },
    middleLine: {
        height: 300,
        marginBottom: 25,

    },
    buttonsLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textsMain: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textsText: {
        color: '#5C5C5C',
        fontSize: 20,
        flex: 1,
        paddingHorizontal: 5
    }
})

export default Details;