import React from "react";
import { View, Text } from "react-native";
import Details from "../components/Details";

const DetailsScreen = ({ navigate, route }) => {
    const { item } = route.params;
    return (
        <Details
            logo={item.thumbnail}
            rating={item.rating}
            title={item.title}
            price={item.price}
            brand={item.brand}
            category={item.category}
            stock={item.stock}
            discount={item.discountPercentage}
            description={item.description}
        />
    )
}

export default DetailsScreen;