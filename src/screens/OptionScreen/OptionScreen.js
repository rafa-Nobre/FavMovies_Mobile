import React from 'react';
import {View, Text} from 'react-native';
import {Auth} from 'aws-amplify';

const OptionScreen = () => {
  const signOut = () => {
    Auth.signOut();
  };
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Opções</Text>
      <Text
        onPress={signOut}
        style={{
          textAlign: 'center',
          textAlignVertical: 'bottom',
          color: 'red',
          marginVertical: 60,
          fontSize: 24,
        }}>
        Sair
      </Text>
    </View>
  );
};

export default OptionScreen;
