import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import GirisYap from "./GirisYap";
import BilgiKutu from "../bilesenler/BilgiKutu";



const Liste = ({ navigation }) => {
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => belirleUrunler(res.products)).then(res => console.log(urunler.length))
    }, [urunler]);
    const [urunler, belirleUrunler] = useState([]);

    useEffect(() => {
        const Girdimi = false;
        if (!Girdimi) {
            navigation.navigate("GirisYap")
        }
    }, []);
    return (
        <FlatList
            data={urunler}
            renderItem={({ item }) => (
                <BilgiKutu
                    itemName={item.title}
                    brand={item.brand}
                    stock={["Stok: ",item.stock]}
                    price={[item.price, "$"]}
                    logo={item.thumbnail}
                />
            )}

        />
    )
}

export default Liste;