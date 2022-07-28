import React, { useEffect, useState, useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import List from "./pages/List";
import Details from "./pages/Details";
import Login from "./pages/Login";
import DetailsEdit from "./pages/DetailsEdit";
import Profile from "./pages/Profile";

import Ionicons from 'react-native-vector-icons/Ionicons'

import { AuthContext } from './Context'

function Splash() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={{ color: 'black', fontSize: 15, fontWeight: '500' }}>Loading...</Text>
    </View>
  )
}

const ListStack = createNativeStackNavigator();


const ListStackScreen = () => {
  return (
    <ListStack.Navigator screenOptions={() => ({
      headerTitleAlign: 'center',
      headerTitleStyle: { fontWeight: 'bold', }
    })}>
      <ListStack.Screen name="List" component={List} />
      <ListStack.Screen name="Details" component={Details} />
      <ListStack.Screen name="DetailsEdit" component={DetailsEdit} />
    </ListStack.Navigator>
  )
}
const MainTab = createBottomTabNavigator();

const AuthStack = createNativeStackNavigator();

const App = ({ navigation, route }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState()

  const authContext = useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('asdf');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log("Selam");
    }, 1000);
  }, [])

  if (isLoading) {
    return Splash();
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <MainTab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: null,
            headerShown: false,
          })}>
            <MainTab.Screen name={"ListStackScreen"} component={ListStackScreen} options={{ title: 'List' }} />
            <MainTab.Screen name={"Profile"} component={Profile} options={{ title: 'Profile' }} />
          </MainTab.Navigator>
        ) : (
          <AuthStack.Navigator screenOptions={() => ({
            headerShown: false,
          })}>
            <AuthStack.Screen name="Login" component={Login} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer >
    </AuthContext.Provider>
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