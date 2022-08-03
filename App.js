import React, { useEffect, useState, useMemo } from "react";
import { Text, View, Image } from "react-native";
import { Icons, UserInfo, ThemeColors } from './components/Constants';
import { AuthContext } from './Context'

//#region Navigation-Import
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//#endregion

//#region Pages-Import
import List from "./pages/List";
import Details from "./pages/Details";
import Login from "./pages/Login";
import DetailsEdit from "./pages/DetailsEdit";
import Profile from "./pages/Profile";
import NewProduct from "./pages/NewProduct";
import ProfileDetails from "./pages/ProfileDetails";
//#endregion

//#region Loading Screen
function Splash() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={{ color: 'black', fontSize: 15, fontWeight: '500' }}>Loading...</Text>
    </View>
  )
}
//#endregion

//#region Stacks on "LIST" Page

const ListStack = createNativeStackNavigator();

const ListStackScreen = () => {
  return (
    <ListStack.Navigator screenOptions={() => ({
      headerTitleAlign: 'center',
      headerTitleStyle: { fontWeight: 'bold', color: 'white' },
      headerShown: true,
    })}>
      <ListStack.Screen
        name="List"
        component={List}
        options={{
          headerStyle: {
            backgroundColor: ThemeColors.main,
          }
        }} />
      <ListStack.Screen
        name="Details"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: ThemeColors.main
          }
        }} />
      <ListStack.Screen
        name="DetailsEdit"
        component={DetailsEdit}
        options={{
          headerStyle: {
            backgroundColor: ThemeColors.main,
          },
          title: 'Edit'
        }}
      />
      <ListStack.Screen
        name="NewProduct"
        component={NewProduct}
        options={{
          headerStyle: {
            backgroundColor: ThemeColors.main
          }
        }} />
    </ListStack.Navigator>
  )
}
//#endregion

//#region Stack on "PROFILE" Page
const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={() => ({
      headerTitleAlign: 'center',
      headerTitleStyle: { fontWeight: 'bold', color: 'white' },
      headerShown: true,
    })}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: {
            backgroundColor: ThemeColors.main,
          }
        }} />
      <ProfileStack.Screen
        name="ProfileDetails"
        component={ProfileDetails}
        options={{
          headerStyle: {
            backgroundColor: ThemeColors.main,
          },
          title: 'Profile Details'
        }} />
    </ProfileStack.Navigator>
  )
}
//#endregion

const MainTab = createBottomTabNavigator();

const AuthStack = createNativeStackNavigator();

const App = () => {

  // Values
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState("");

  //#region Auth Functions
  const authContext = useMemo(() => {
    return {
      signIn: ({ user }) => {
        setIsLoading(false);
        setUserToken(user.token);
        UserInfo.id = user.id
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  }, [])
  //#endregion

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  if (isLoading) {
    return Splash();
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? ( // Open Main Menu
          <MainTab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size }) => { //Tab Bar
              let iconName;
              let rn = route.name;
              let color;

              if (rn === 'ListStackScreen') {
                iconName = Icons.list
              } else if (rn === 'ProfileStackScreen') {
                iconName = Icons.profile
              }
              color = focused ? ThemeColors.main : 'gray'

              return <Image
                source={iconName}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                }}
              />
            },
            headerShown: false,
          })}>
            <MainTab.Screen
              name={"ListStackScreen"}
              component={ListStackScreen}
              options={{ title: 'List' }}
            />
            <MainTab.Screen
              name={"ProfileStackScreen"}
              component={ProfileStackScreen}
              options={{ title: 'Profile' }}
            />
          </MainTab.Navigator>
        ) : ( // Open Login Screen
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

export default App;