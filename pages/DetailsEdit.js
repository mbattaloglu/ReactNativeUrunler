import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, ScrollView } from "react-native";

import MyButton from "../components/MyButton";

import { ThemeColors } from "../components/Constants";

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
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.headerText}>Edit #{item.id}</Text>
                <View style={styles.stick} />

                {/* Other */}
                <View style={styles.otherLine}>
                    <Texts
                        main={"Title"}
                        text={item.title}
                        command={value => setTitle(value)} />
                    <Texts
                        main={"Price"}
                        text={item.price}
                        addkeyboardType={'phone-pad'}
                        command={value => setPrice(value)} />
                    <Texts
                        main={"Rating"}
                        text={item.rating}
                        addkeyboardType={'phone-pad'}
                        command={value => setRating(value)} />
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
                        addkeyboardType={'phone-pad'}
                        command={value => setStock(value)} />
                    <Texts
                        main={"Discount"}
                        text={item.discountPercentage}
                        addkeyboardType={'phone-pad'}
                        command={value => setDiscountPercentage(value)} />
                    <Texts
                        main={"Logo"}
                        text={item.thumbnail}
                        command={value => setLogo(value)} />
                    <Texts
                        main={"Description"}
                        text={item.description}
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
                    <MyButton text={"Save"}
                        boxStyle={{ height: 50 }}
                        command={() =>
                            [fetch('https://dummyjson.com/products/' + item.id, {
                                method: 'PUT', /* or PATCH */
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
                                .then(res => res.json())
                                .then(console.log)

                                , navigation.goBack()]
                        }
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
        color: 'black',
        fontWeight: 'bold',
    },
    stick: {
        backgroundColor: '#463F3A',
        height: 2,
        width: 150,
        alignSelf: 'center',
        marginBottom: 40,

    },
})

export default DetailsEdit;