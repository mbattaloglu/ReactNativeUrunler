import React, {useEffect} from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import List from "./pages/List";
import DetailsScreen from "./pages/DetailsScreen";
import Login from "./pages/Login";

const Yigin = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Yigin.Navigator screenOptions={() => ({
        headerShown:false
      })}>
        <Yigin.Screen name="List" component={List}/>
        <Yigin.Screen name="DetailsScreen" component={DetailsScreen}/>
        <Yigin.Screen name="Login" component={Login}/>
      </Yigin.Navigator>
    </NavigationContainer>
  );
};

const stiller = StyleSheet.create({
  genel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App;