import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Searchbar} from 'react-native-paper';
import {fetchAsyncMovies, fetchAsyncShows} from '../../redux/movieSlice';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const onChangeSearch = query => {
    setTerm(query);
    if (term === '') return alert('Please type an valid entry!');
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  };

  return (
    <View style={{flex: 1, width: '100%'}}>
      <Searchbar
        placeholder="Pesquisar filme ou série"
        onChangeText={onChangeSearch}
        value={term}
      />
    </View>
  );
};

export default SearchBar;
