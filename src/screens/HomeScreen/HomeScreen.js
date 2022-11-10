import React from 'react';
import {View, Text} from 'react-native';
//import MaterialBottomNavigator from '../../components/BottomTab/MaterialBottomNavigator';

const HomeScreen = () => {
  const signOut = () => {
    Auth.signOut();
  };
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Bem vindo</Text>
    </View>
  );
};

export default HomeScreen;
