import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {getAllMovies, getAllShows} from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import styles from './styles';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = '';
  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <View className="movies-error">
        <Text>{movies.Error}</Text>
      </View>
    );

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <View className="shows-error">
        <Text>{shows.Error}</Text>
      </View>
    );
  return (
    <ScrollView>
      <View className="movie-list">
        <Text style={styles.title}>Movies</Text>
        <View className="movie-container">{renderMovies}</View>
      </View>
      <View className="show-list">
        <Text style={styles.title}>Series</Text>
        <View className="movie-container">{renderShows}</View>
      </View>
    </ScrollView>
  );
};

export default MovieListing;
