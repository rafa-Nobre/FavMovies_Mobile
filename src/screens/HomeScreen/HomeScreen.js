import React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = ({route, navigation}) => {
  const data = route.params;
  return (
    <View>
      <Text>Entrou como:{data}</Text>
    </View>
  );
};

export default HomeScreen;
