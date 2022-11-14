import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShows} from '../../redux/movieSlice';
import MovieListing from '../../components/MovieListing/MovieListing';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const movieText = 'Time';
  const showText = 'Friends';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  const onChangeSearch = query => setTerm(query);

  return (
    <View style={{flex: 1, width: '100%'}}>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Bem vindo</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        onIconPress={query => setTerm(query.target.value)}
        value={term}
      />
      <View>
        <MovieListing />
      </View>
    </View>
  );
};

export default HomeScreen;
