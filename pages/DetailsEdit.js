import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput } from "react-native";

import MyButton from "../components/MyButton";

const DetailsEdit = ({ navigation, route }) => {

    const { item } = route.params;

    const [logo, setLogo] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [description, setDescription] = useState('');

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
                <Texts
                    main={"Brand"}
                    text={item.brand}
                    command={value => setBrand(value)} />
                <Texts
                    main={"Category"}
                    text={item.category}
                    command={value => setCategory(value)} />
                <Texts
                    main={"Stock"}
                    text={item.stock}
                    command={value => setStock(value)} />
                <Texts
                    main={"Discount Percentage"}
                    text={item.discountPercentage}
                    command={value => setDiscountPercentage(value)} />
                <Texts
                    main={"Description"}
                    text={item.description}
                    command={value => setDescription(value)} />
            </View>

            {/* Buttons */}
            <View style={styles.buttonsLine}>
                <MyButton text={"Cancel"}
                    boxStyle={{ backgroundColor: 'darkgray', height: 50 }}
                    textStyle={{ color: 'black' }}
                />
                <MyButton text={"Save"}
                    boxStyle={{ backgroundColor: 'darkgray', height: 50 }}
                    textStyle={{ color: 'black' }}
                    command={() =>

                        [fetch('https://dummyjson.com/products/1', {
                            method: 'PUT', /* or PATCH */
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                brand: brand,
                                category: category,
                                stock: stock,
                                discountPercentage: discountPercentage,
                                description: description
                            })
                        })
                            .then(res => res.json())
                            .then(console.log)
                        
                            ,navigation.goBack()]
                    }
                />
            </View>

        </View>

    )
}

const Texts = ({ main, text, command }) => {

    return (
        <View style={{ flexDirection: 'row', marginBottom: 20, alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{main}: </Text>
            <TextInput
                style={{ color: 'black', flex: 1, fontSize: 20 }}
                onChangeText={command}
            >{text}</TextInput>
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
        textAlign: 'center'
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

export default DetailsEdit;