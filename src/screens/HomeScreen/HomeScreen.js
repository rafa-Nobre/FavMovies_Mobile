import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import SearchBar from '../../components/SearchBar/SearchBar';
import {useDispatch} from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShows} from '../../redux/movieSlice';
import {Auth} from 'aws-amplify';
import MovieListing from '../../components/MovieListing/MovieListing';

const HomeScreen = () => {
  // Retorna o username atual para mostrar na tela de boas vindas
  // const getUser = async data => {
  //   try{
  //     return await Auth.currentUserInfo(data.username)
  //   }catch(e) {
  //     console.log(e)
  //   }
  // }
  const dispatch = useDispatch();
  const movieText = 'Time';
  const showText = 'Friends';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <View style={{flex: 1, width: '100%'}}>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Bem vindo</Text>
      <SearchBar />
      <MovieListing />
    </View>
  );
};

export default HomeScreen;
