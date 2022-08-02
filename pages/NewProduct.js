import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TextInput, ScrollView } from "react-native";

import MyButton from "../components/MyButton";

import { ThemeColors } from "../components/Constants";

const NewProduct = ({ navigation }) => {

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
        <ScrollView>
            <View style={styles.container}>

                {/* Other */}
                <View style={styles.otherLine}>
                    <Texts
                        main={"Title"}
                        command={value => setTitle(value)} />
                    <Texts
                        main={"Price"}
                        addkeyboardType={'phone-pad'}
                        command={value => setPrice(value)} />
                    <Texts
                        main={"Rating"}
                        addkeyboardType={'phone-pad'}
                        command={value => setRating(value)} />
                    <Texts
                        main={"Brand"}
                        command={value => setBrand(value)} />
                    <Texts
                        main={"Category"}
                        command={value => setCategory(value)} />
                    <Texts
                        main={"Stock"}
                        addkeyboardType={'phone-pad'}
                        command={value => setStock(value)} />
                    <Texts
                        main={"Discount"}
                        addkeyboardType={'phone-pad'}
                        command={value => setDiscountPercentage(value)} />
                    <Texts
                        main={"Logo"}
                        command={value => setLogo(value)} />
                    <Texts
                        main={"Description"}
                        maxHeight={100}
                        addmultiline={true}
                        command={value => setDescription(value)} />
                </View>

                {/* Buttons */}
                <View style={styles.buttonsLine}>
                    <MyButton text={"Cancel"}
                        boxStyle={{ height: 50 }}
                        command={() => navigation.goBack()}
                    />
                    <MyButton text={"Add"}
                        boxStyle={{ height: 50 }}
                        command={() =>
                            [fetch('https://dummyjson.com/products/add', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    title: title,
                                    price: price,
                                    rating: rating,
                                    brand: brand,
                                    category: category,
                                    stock: stock,
                                    discountPercentage: discountPercentage,
                                    thumbnail: logo,
                                    description: description
                                })
                            })
                                .then(res => res.json()),
                            navigation.goBack()]}
                    />
                </View>

            </View>

        </ScrollView>
    )
}

const Texts = ({ main, text, command, maxHeight, addmultiline, addkeyboardType }) => {

    return (
        <View style={{ flexDirection: 'row', marginBottom: 20, alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: '700' }}>{main} :</Text>
            <TextInput
                style={[styles.textinput, { height: maxHeight, maxWidth: 220 }]}
                textAlignVertical='top'
                multiline={addmultiline}
                keyboardType={addkeyboardType}
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
        backgroundColor: '#F4F3EE'
    },
    otherLine: {
        marginBottom: 25,
    },
    buttonsLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textinput: {
        color: '#ffffff',
        flex: 1,
        fontSize: 20,
        backgroundColor: ThemeColors.main,
        borderBottomWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    headerText: {
        fontSize: 40,
        alignSelf: 'center',
        color: '#463F3A',
        fontWeight: 'bold'
    },
    stick: {
        backgroundColor: '#463F3A',
        height: 2,
        width: 150,
        alignSelf: 'center',
        marginBottom: 20,

    },
})

export default NewProduct;