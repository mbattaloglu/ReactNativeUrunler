import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import MyButton from "./MyButton";

const Details = ({ logo, rating, title, price, brand, category, stock, discount, description }) => {
    return (

        <View style={styles.container}>

            {/* Header */}
            <View style={styles.headerLine}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.logo}
                        source={{ uri: logo }}
                    />
                    <Text style={styles.rating}>{rating}</Text>

                </View>

                <View style={styles.headerText}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.stick} />
                    <View style={styles.priceLine}>
                        <Text style={styles.price}>{price}$</Text>
                        <Text style={styles.countPrice}>{parseInt(price * (100 - discount) / 100)}$</Text>
                    </View>
                </View>

            </View>

            {/* Other */}
            <View style={styles.otherLine}>
                <Texts main={"Brand"} text={brand} />
                <Texts main={"Category"} text={category} />
                <Texts main={"Stock"} text={stock} />
                <Texts main={"Discount Percentage"} text={discount} />
                <Texts main={"Description"} text={description} />
            </View>

            {/* Buttons */}
            <View style={styles.buttonsLine}>
                <MyButton text={"Delete"}
                    boxStyle={{ backgroundColor: 'darkgray', height: 50 }}
                    textStyle={{ color: 'black' }}
                />
                <MyButton text={"Edit"}
                    boxStyle={{ backgroundColor: 'darkgray', height: 50 }}
                    textStyle={{ color: 'black' }} />

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