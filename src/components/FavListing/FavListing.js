import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {getFavMovies, getFavShows} from '../../redux/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import styles from './styles';

const FavListing = () => {
  const favMovies = useSelector(getFavMovies);
  const favShows = useSelector(getFavShows);

  useEffect(() => {
    console.log('FavListing ~ 19 ~ favMovies', favMovies);
  }, [favMovies]);

  //Handlers para o tamanho do array
  const moviesFallback = favMovies || [];
  const showsFallback = favShows || [];
  const getMoviesArray = moviesFallback?.length || 0;
  const getShowsArray = showsFallback?.length || 0;

  return (
    <View style={{flex: 1, backgroundColor: '#ED8D33'}}>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Filmes</Text>
        <View style={{flex: 1, marginTop: 8}}>
          {getMoviesArray === 0 ? (
            <Text>Nossa que vazio!</Text>
          ) : (
            <FlatList
              data={favMovies}
              renderItem={({item}) => <MovieCard data={item} />}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            />
          )}
        </View>
      </View>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Séries</Text>
        <View style={{flex: 1, marginTop: 8}}>
          {getShowsArray === 0 ? (
            <Text>Nossa que vazio!</Text>
          ) : (
            <FlatList
              data={favShows}
              renderItem={({item}) => <MovieCard data={item} />}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default FavListing;
