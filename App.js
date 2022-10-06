import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ConfirmEmailScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0F171E',
  },
});

export default App;
