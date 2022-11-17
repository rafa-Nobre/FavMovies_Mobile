import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  removeFavMovie,
  removeFavShow,
  getFavMovies,
  getFavShows,
} from '../../redux/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import styles from './styles';

const FavListing = () => {
  const favMovies = useSelector(getFavMovies);
  const favShows = useSelector(getFavShows);
  const dispatch = useDispatch();

  //Dispatchers
  const removeFromFavMovies = movie => dispatch(removeFavMovie(movie));
  const removeFromFavShows = show => dispatch(removeFavShow(show));

  //Handlers
  const handleRemoveFavMovie = movie => {
    removeFromFavMovies(movie);
  };
  const handleRemoveFavShow = show => {
    removeFromFavShows(show);
  };

  //Convertendo as entradas para um array
  // const asArrayMovies = Object.entries(favMovies);
  // const asArrayShows = Object.entries(favShows);
  const ifExistsMovies = movie => {
    if (favMovies.filter(item => item.id === movie.id).length > 0) {
      return true;
    }
    return false;
  };
  const ifExistsShows = show => {
    if (favShows.filter(item => item.id === show.id).length > 0) {
      return true;
    }
    return false;
  };

  // const renderMovies = ({item}) => {
  //   movies.Response === 'True' ? (
  //     <MovieCard data={item} />
  //   ) : (
  //     <View>
  //       <Text>{movies.Error}</Text>
  //     </View>
  //   );
  // };
  // const renderShows = ({item}) => {
  //   shows.Response === 'True' ? (
  //     <MovieCard data={item} />
  //   ) : (
  //     <View>
  //       <Text>{shows.Error}</Text>
  //     </View>
  //   );
  // };

  return (
    <View style={{flex: 1, backgroundColor: '#ED8D33'}}>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Filmes</Text>
        <View style={{flex: 1, marginTop: 8}}>
          <FlatList
            data={movies}
            renderItem={({item}) => <MovieCard data={item} />}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        </View>
      </View>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Séries</Text>
        <View style={{flex: 1, marginTop: 8}}>
          <FlatList
            data={shows}
            renderItem={({item}) => <MovieCard data={item} />}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        </View>
      </View>
    </View>
  );
};

export default FavListing;
