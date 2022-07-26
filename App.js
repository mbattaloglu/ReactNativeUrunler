import React, {useEffect} from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Liste from "./sayfalar/Liste";
import GirisYap from "./sayfalar/GirisYap";

const Yigin = createNativeStackNavigator();

const App = ({navigation}) => {
  return (
    <NavigationContainer>
      <Yigin.Navigator screenOptions={() => ({
        headerShown:false
      })}>
        <Yigin.Screen name="Liste" component={Liste}/>
        <Yigin.Screen name="GirisYap" component={GirisYap}/>
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