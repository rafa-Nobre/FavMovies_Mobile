import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import FavListing from '../../components/FavListing/FavListing';

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
      <FavListing />
    </View>
  );
};

export default FavoriteScreen;
