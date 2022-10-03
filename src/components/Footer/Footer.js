import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import './Footer.scss';

const Footer = () => {
  return (
    <View className="footer" style={styles.container}>
      <Text>Movie App</Text>
      <Text>©2022, Movie, Inc. and affiliates</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    background: '#1a242f',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    flexDirection: 'column',
  },
});

export default Footer;
