import React, {useEffect} from 'react';
import MovieListing from '../../components/MovieListing/MovieListing';
import './Home.scss';
import {useDispatch} from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <View>
      <View className="banner-img"></View>
      <MovieListing />
    </View>
  );
};

export default Home;
