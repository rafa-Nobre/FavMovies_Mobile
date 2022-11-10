import React from 'react';
import {View, Text} from 'react-native';
import {Auth} from 'aws-amplify';
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
  const signOut = () => {
    Auth.signOut();
  };
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Bem vindo</Text>
      <Text
        onPress={signOut}
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 'auto',
          marginVertical: 20,
          fontSize: 20,
        }}>
        Sair
      </Text>
    </View>
  );
};

export default HomeScreen;
