import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Auth, Hub} from 'aws-amplify';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import TermsScreen from '../screens/TermsScreen';
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import OptionScreen from '../screens/OptionScreen/OptionScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Routes = () => {
  const [user, setUser] = useState('teste');

  /* const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };
    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  } */

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: `Início`,
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Favorite"
            component={FavoriteScreen}
            options={{
              tabBarLabel: 'Favoritos',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="star" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: 'Perfil',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={OptionScreen}
            options={{
              tabBarLabel: 'Opções',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="cog" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{title: 'Cadastro'}}
          />
          <Stack.Screen
            name="ConfirmEmail"
            component={ConfirmEmailScreen}
            options={{title: 'Confirmação de Email'}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
            options={{title: 'Recuperar Senha'}}
          />
          <Stack.Screen
            name="NewPassword"
            component={NewPasswordScreen}
            options={{title: 'Recuperar Senha'}}
          />
          <Stack.Screen
            name="Terms"
            component={TermsScreen}
            options={{title: 'Termos de Uso'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
