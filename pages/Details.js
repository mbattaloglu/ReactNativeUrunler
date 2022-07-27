import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import MyButton from "../components/MyButton";

const Details = ({ navigation, route }) => {

    const {item} = route.params;

    return (
        <View style={styles.container}>
            {/* Header */}
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

            {/* Other */}
            <View style={styles.otherLine}>
                <Texts main={"Brand"} text={item.brand} />
                <Texts main={"Category"} text={item.category} />
                <Texts main={"Stock"} text={item.stock} />
                <Texts main={"Discount Percentage"} text={item.discountPercentage} />
                <Texts main={"Description"} text={item.description} />
            </View>

            {/* Buttons */}
            <View style={styles.buttonsLine}>
                <MyButton text={"Delete"}
                    boxStyle={{ backgroundColor: 'darkgray', height: 50 }}
                    textStyle={{ color: 'black' }}
                />
                <MyButton text={"Edit"}
                    boxStyle={{ backgroundColor: 'darkgray', height: 50 }}
                    textStyle={{ color: 'black' }} 
                    command={() => navigation.navigate('DetailsEdit', {item})}
                    />

            </View>

        </View>

    )
}

const Texts = ({ main, text }) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{main}: </Text>
            <Text style={{ color: 'black', fontSize: 20, flex: 1 }}>{text}</Text>
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
        borderColor: 'black'
    },
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign:'center'
    },
    priceLine: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    price: {
        fontSize: 17,
        textDecorationLine: 'line-through',
        marginRight: 5
    },
    countPrice: {
        fontSize: 25,
    },
    rating: {
        fontSize: 20,
        color: 'black'
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
    otherLine: {
        height: 300,
        marginBottom: 25,
    },
    buttonsLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Details;