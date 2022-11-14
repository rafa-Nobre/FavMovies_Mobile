import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';

// import { Container } from './styles';

const FavoriteScreen = () => {
  const [term, setTerm] = useState('');
  const onChangeSearch = query => setTerm(query);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={term}
      />
    </View>
  );
};

export default FavoriteScreen;
