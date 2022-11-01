import React from 'react';
import {View, Text} from 'react-native';

const HomeScreen = ({route, navigation}) => {
  //const data = route.params;
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Tela Home</Text>
    </View>
  );
};

export default HomeScreen;
