import React, { useEffect, useState } from "react";
import { View, FlatList, TextInput, StyleSheet } from "react-native";

import InfoBox from "../components/InfoBox";
import IconButton from "../components/IconButton";

import { Icons } from "../components/Constants";


const List = ({ navigation }) => {

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => setProducts(res.products))
    }, []);

    const [products, setProducts] = useState([]);

    return (
        <View style={{ flex: 1, paddingHorizontal: 20, backgroundColor:'white' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                {/* Search */}
                <TextInput
                    style={styles.searchBox}
                    placeholder={"Search"}
                    placeholderTextColor='white'
                    onChangeText={(text) => {
                        if (text.length > 3 || text.length == 0)
                            fetch('https://dummyjson.com/products/search?q=' + text)
                                .then(res => res.json())
                                .then(res => setProducts(res.products)).then(console.log("Liste degisti!"))
                    }}
                >
                </TextInput>

                {/* Add */}
                <View style={{ alignSelf: 'flex-end' }}>
                    <IconButton icon={Icons.plus} command={() => navigation.navigate("NewProduct")} />
                </View>
            </View>

            <FlatList
                data={products}
                extraData={products}
                renderItem={({ item }) => (
                    <InfoBox
                        itemName={item.title}
                        discount={item.discountPercentage}
                        price={[item.price, "$"]}
                        logo={item.thumbnail}
                        command={() => navigation.navigate("Details", { item })}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        width: 299,
        height: 34,
        backgroundColor: '#7f7f7f',
        paddingLeft: 10,
        fontSize: 12,
        fontStyle: 'italic',
        color: 'white',
        borderRadius: 10,
    },
})

export default List;