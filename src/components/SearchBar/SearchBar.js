import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Searchbar} from 'react-native-paper';
import {fetchAsyncMovies, fetchAsyncShows} from '../../redux/movieSlice';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const onChangeSearch = query => {
    setTerm(query);
    console.log(query);
  };
  const submitHandler = e => {
    e.preventDefault();
    if (term === '') return alert('Por favor, digite uma pesquisa válida');
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
    console.log('pesquisa', term);
  };

  return (
    <View style={{flex: 1, width: '100%', maxHeight: 50}}>
      <Searchbar
        placeholder="Pesquisar"
        onChangeText={onChangeSearch}
        onIconPress={submitHandler}
        value={term}
        style={{borderRadius: 20}}
      />
    </View>
  );
};

export default SearchBar;
