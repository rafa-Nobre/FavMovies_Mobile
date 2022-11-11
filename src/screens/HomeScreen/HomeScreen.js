import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
//import MaterialBottomNavigator from '../../components/BottomTab/MaterialBottomNavigator';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const onChangeSearch = query => setTerm(query);

  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Bem vindo</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={term}
      />
    </View>
  );
};

export default HomeScreen;
