import React, {useState, useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ListItems from './src/ListItems';
import Login from './src/Login';
import ItemDetails from './src/ItemDetails';
import EditItem from './src/EditItem';
import Profile from './src/Profile';
import SplashScreen from './src/components/SplashScreen';

import {AuthContext} from './src/config/Context';

const ListStack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ListStackScreen = () => {
  return (
    <ListStack.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: null,
        headerShown: false,
      })}>
      <ListStack.Screen name="ListItems" component={ListItems} />
      <ListStack.Screen name="ItemDetails" component={ItemDetails} />
      <ListStack.Screen name="EditItem" component={EditItem} />
      <ListStack.Screen name="Profile" component={Profile} />
    </ListStack.Navigator>
  );
};

const App = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState('');

  if (isLoading) {
    return <SplashScreen />;
  }

  const authContext = useMemo(() => {
    return {
      signIn: ({token}) => {
        setLoading(false);
        setUserToken(token);
      },
      signOut: () => {
        setLoading(false);
        setUserToken('');
      },
    };
  }, []);
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <Tab.Navigator
            screenOptions={() => ({
              headerShown: false,
            })}>
            <Tab.Screen
              name="ListStackScreen"
              component={ListStackScreen}
              options={{
                title: 'Ürünler',
                tabBarIcon: () => <Icon name={'list-ul'} />,
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                title: 'Profil',
                tabBarIcon: () => <Icon name={'user-alt'} />,
              }}
            />
          </Tab.Navigator>
        ) : (
          <AuthStack.Navigator
            screenOptions={() => ({
              headerShown: false,
            })}>
            <AuthStack.Screen name="Login" component={Login} />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
