import React from 'react';
import {View, Text} from 'react-native';
//import MaterialBottomNavigator from '../../components/BottomTab/MaterialBottomNavigator';

const HomeScreen = () => {
  // const getUsername = async user => {
  //   try {
  //     const response = await Auth.userAttributes(user.username);
  //     console.log('HomeScreen ~ getUsername ~ 9 ~ response: ', response);
  //   } catch (e) {
  //     console.log('Oops', e.message);
  //   }
  // };
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Bem vindo</Text>
    </View>
  );
};

export default HomeScreen;
