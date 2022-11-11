import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import Routes from './src/routes';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';

Amplify.configure(config);

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Routes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0f171e',
  },
});

export default App;
