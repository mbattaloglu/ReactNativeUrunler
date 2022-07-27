import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';

import InfoBox from "../components/InfoBox";



const List = ({ navigation }) => {
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProducts(res.products))
    }, []);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const IsLoggined = false;
        if (!IsLoggined) {
            navigation.navigate("Login")
        }
    }, []);
    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <InfoBox
                    itemName={item.title}
                    brand={item.brand}
                    stock={["Stock: ", item.stock]}
                    price={[item.price, "$"]}
                    logo={item.thumbnail}
                    command={() => navigation.navigate("Details", { item })}
                />
            )}

        />
    )
}

export default List;