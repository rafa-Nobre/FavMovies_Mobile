import React from 'react';
import {View, Text} from 'react-native';
import {Auth} from 'aws-amplify';

const HomeScreen = () => {
  // const getUsername = async user => {
  //   const response = await Auth.userAttributes(user.username);
  //   console.log('HomeScreen ~ 8 ~ attributes: ', response);
  // };

  const signOut = () => {
    Auth.signOut();
  };
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Tela Home</Text>
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
