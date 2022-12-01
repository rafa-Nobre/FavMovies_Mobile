import React from 'react';
import {View, Text} from 'react-native';
import {Auth} from 'aws-amplify';
import styles from './styles';

const OptionScreen = () => {
  const signOut = () => {
    Auth.signOut();
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>Opções</Text>
      <Text onPress={signOut} style={styles.signOutText}>
        Sair
      </Text>
    </View>
  );
};

export default OptionScreen;
