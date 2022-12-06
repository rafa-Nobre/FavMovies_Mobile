import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {getAllMovies, getAllShows} from '../../redux/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import styles from './styles';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  useEffect(() => {
    console.log('24 / movies: ', movies);
    console.log('25 / shows: ', shows);
  }, [movies, shows]);

  return (
    <View style={{flex: 1, backgroundColor: '#ED8D33'}}>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Filmes</Text>
        <View style={{flex: 1, marginTop: 8}}>
          <FlatList
            data={movies.Search}
            renderItem={({item}) => <MovieCard data={item} />} //({item}) => <MovieCard data={item} />
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        </View>
      </View>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Séries</Text>
        <View style={{flex: 1, marginTop: 8}}>
          <FlatList
            data={shows.Search}
            renderItem={({item}) => <MovieCard data={item} />}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        </View>
      </View>
    </View>
  );
};

export default MovieListing;
