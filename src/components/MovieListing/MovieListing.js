import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  getAllMovies,
  getAllShows,
  addFavMovies,
  addFavShows,
  removeFavMovie,
  removeFavShow,
  getFavMovies,
  getFavShows,
} from '../../redux/movieSlice';
import styles from './styles';

const MovieListing = () => {
  const {movies} = useSelector(getAllMovies);
  const {shows} = useSelector(getAllShows);
  const {favMovies} = useSelector(getFavMovies);
  const {favShows} = useSelector(getFavShows);

  //console.log(movies);
  //console.log(shows);

  //Dispatchers
  const dispatch = useDispatch();
  const addToFavMovies = movie => dispatch(addFavMovies(movie));
  const addToFavShows = show => dispatch(addFavShows(show));
  const removeFromFavMovies = movie => dispatch(removeFavMovie(movie));
  const removeFromFavShows = show => dispatch(removeFavShow(show));

  //Handlers
  const handleAddFavMovie = movie => {
    console.log('MovieCard ~ handleAddFavMovie ~ 31');
    addToFavMovies(movie);
  };
  const handleAddFavShow = show => {
    addToFavShows(show);
  };
  const handleRemoveFavMovie = movie => {
    removeFromFavMovies(movie);
  };
  const handleRemoveFavShow = show => {
    removeFromFavShows(show);
  };

  const ifExistsMovie = movie => {
    if (favMovies.filter(item => item.id === movie.id).length > 0) {
      return true;
    }
    return false;
  };
  const ifExistsShow = show => {
    if (favShows.filter(item => item.id === show.id).length > 0) {
      return true;
    }
    return false;
  };

  const renderMovies = ({data}) => {
    return (
      <View style={{marginVertical: 12, flex: 1, flexDirection: 'row'}}>
        {/*Cover*/}
        <Image
          source={{uri: data.Poster}}
          resizeMode="cover"
          style={{width: 100, height: 150, borderRadius: 10}}
        />
        {/*Metadata*/}
        <View style={{flex: 1, marginLeft: 12}}>
          <Text style={{fontSize: 22, paddingRight: 16, color: 'white'}}>
            {data.Title}
          </Text>

          {/*Metainfo*/}
          {/*Removi esses duas tags do view comentado abaixo */}
          <MaterialCommunityIcons name="calendar" size={20} />
          <Text style={{fontSize: 14, paddingLeft: 10, color: '#64676D'}}>
            {data.Year}
          </Text>
          {/* <View
             style={{
               flexDirection: 'row',
               marginTop: 10,
               alignItems: 'center',
             }}>

           </View> */}
          {/*Fav Button*/}
          <View style={{marginTop: 14}}>
            <TouchableOpacity
              onPress={() =>
                ifExistsMovie(data)
                  ? handleRemoveFavMovie(data)
                  : handleAddFavMovie(data)
              }
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                padding: 2,
                backgroundColor: ifExistsMovie(data) ? '#F96D41' : '#3393ED',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 40,
              }}>
              <MaterialCommunityIcons
                name={ifExistsMovie(data) ? 'star-outline' : 'star'}
                color={ifExistsMovie(data) ? 'white' : '#64676D'}
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderShows = ({data}) => {
    return (
      <View style={{marginVertical: 12, flex: 1}}>
        <View style={{flexDirection: 'row', flex: 1}}>
          {/*Cover*/}
          <Image
            source={{uri: data.Poster}}
            resizeMode="cover"
            style={{width: 100, height: 150, borderRadius: 10}}
          />
          {/*Metadata*/}
          <View style={{flex: 1, marginLeft: 12}}>
            <View>
              <Text style={{fontSize: 22, paddingRight: 16, color: 'white'}}>
                {data.Title}
              </Text>
            </View>
            {/*Metainfo*/}
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons name="calendar" size={20} />
              <Text style={{fontSize: 14, paddingLeft: 10, color: '#64676D'}}>
                {data.Year}
              </Text>
            </View>
            {/*Fav Button*/}
            <View style={{marginTop: 14}}>
              <TouchableOpacity
                onPress={() =>
                  ifExistsShow(data)
                    ? handleRemoveFavShow(data)
                    : handleAddFavShow(data)
                }
                activeOpacity={0.7}
                style={{
                  flexDirection: 'row',
                  padding: 2,
                  backgroundColor: ifExistsShow(data) ? '#F96D41' : '#3393ED',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40,
                }}>
                <MaterialCommunityIcons
                  name={ifExistsShow(data) ? 'star-outline' : 'star'}
                  color={ifExistsShow(data) ? 'white' : '#64676D'}
                  size={24}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ED8D33'}}>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Filmes</Text>
        <FlatList
          data={movies}
          renderItem={renderMovies} //({item}) => <MovieCard data={item} />
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{flex: 1, width: 100}}
        />
        <View style={{flex: 1, marginTop: 8}}></View>
      </View>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Séries</Text>
        <FlatList
          data={shows}
          renderItem={renderShows}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
        <View style={{flex: 1, marginTop: 8}}></View>
      </View>
    </SafeAreaView>
  );
};

export default MovieListing;
