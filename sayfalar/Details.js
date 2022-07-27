import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import Buton from "../bilesenler/Buton";

const Details = ({logo, rating, price, brand, category, stock, discount, description}) => {
    return (

        <View style={styles.container}>

            {/* Header */}
            <View style={styles.headerLine}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        style={styles.logo}
                        source={{ uri: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg' }}
                    />
                    <Text style={styles.rating}>4.69</Text>

                </View>

                <View style={styles.headerText}>
                    <Text style={styles.title}>iPhone 9</Text>
                    <View style={styles.stick} />
                    <View style={styles.priceLine}>
                        <Text style={styles.price}>549$</Text>
                        <Text style={styles.countPrice}>{parseInt(549 * (100 - 12.96) / 100)}$</Text>
                    </View>
                </View>

            </View>

            {/* Other */}
            <View style={styles.otherLine}>
                <Texts brand={"Brand"} text={"Apple"}/>
                <Texts brand={"Category"} text={"smartphones"}/>
                <Texts brand={"Stock"} text={"94"}/>
                <Texts brand={"Discount"} text={"12.96"}/>
                <Texts brand={"Description"} text={"An apple mobile which is nothing like apple"}/>
            </View>

            {/* Buttons */}
            <View style= {styles.buttonsLine}>
                <Buton metin={"Sil"} 
                kutuStil={{backgroundColor: 'darkgray', height:50}}
                metinStil={{color:'black'}}
                />
                <Buton metin={"Düzenle"} 
                kutuStil={{backgroundColor: 'darkgray', height:50}}
                metinStil={{color:'black'}}/>
                
            </View>

        </View>

    )
}

const Texts = ({brand, text}) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom:20}}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>{brand}: </Text>
            <Text style={{ color: 'black', fontSize: 20, flex:1 }}>{text}</Text>
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
        fontWeight: 'bold'
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
        marginBottom:25,
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
        height:300,
        marginBottom:25,
    },
    buttonsLine: {
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export default Details;