import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Auth} from 'aws-amplify';

const HomeScreen = () => {
  const getUsername = async user => {
    try {
      const response = await Auth.userAttributes(user.username);
      console.log('HomeScreen ~ getUsername ~ 9 ~ response: ', response);
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };
  //const data = route.params;
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
