import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScreenStackHeaderLeftView} from 'react-native-screens';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

const MovieCard = props => {
  const {data} = props;
  //const [fav, setFav] = React.useState(false);

  const favMovies = useSelector(getFavMovies);
  const favShows = useSelector(getFavShows);

  const getMoviesArray = Object.values(favMovies);
  const getShowsArray = Object.values(favShows);

  const dispatch = useDispatch();

  //Dispatchers
  const addToFavMovies = movie => dispatch(addFavMovies(movie));
  const addToFavShows = show => dispatch(addFavShows(show));
  const removeFromFavMovies = movie => dispatch(removeFavMovie(movie));
  const removeFromFavShows = show => dispatch(removeFavShow(show));

  //Handlers
  const handleAddFavMovie = movie => {
    console.log('MovieCard ~ handleAddFavMovie ~ 37');
    addToFavMovies(movie);
  };
  const handleAddFavShow = show => {
    console.log('MovieCard ~ handleAddFavShow ~ 41');
    addToFavShows(show);
  };
  const handleRemoveFavMovie = movie => {
    removeFromFavMovies(movie);
  };
  const handleRemoveFavShow = show => {
    removeFromFavShows(show);
  };

  const ifExistsMovie = movie => {
    
    if (getMoviesArray.filter(item => item?.imdbID === movie?.imdbID).length > 0) {
      return true;
    }
    return false;
  };
  const ifExistsShow = show => {
    
    if (getShowsArray.filter(item => item?.imdbID === show?.imdbID).length > 0) {
      return true;
    }
    return false;
  };
  // const ifExistsMovie = () => {
  //   if (getMoviesArray > 0) {
  //     return true;
  //   }
  //   return false;
  // };
  // const ifExistsShow = () => {
  //   if (getShowsArray > 0) {
  //     return true;
  //   }
  //   return false;
  // };

  // useEffect(() => {
  //   if (fav) handleAddFavMovie(data);
  // }, [fav]);

  return (
    <View style={{marginVertical: 12}}>
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
            style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            <MaterialCommunityIcons name="calendar" size={20} />
            <Text style={{fontSize: 14, paddingLeft: 10, color: '#64676D'}}>
              {data.Year}
            </Text>
          </View>
          {/*Fav Button*/}
          <View style={{marginTop: 14}}>
            <TouchableOpacity
              onPress={() => {
                if (data.Type == 'movie') {
                  ifExistsMovie(data)
                    ? handleRemoveFavMovie(data)
                    : handleAddFavMovie(data);
                } else {
                  ifExistsShow(data)
                    ? handleRemoveFavShow(data)
                    : handleAddFavShow(data);
                }
              }} //setFav(!fav)
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                padding: 2,
                backgroundColor:
                  ifExistsMovie(data) || ifExistsShow(data)
                    ? '#3393ED'
                    : '#ed8d33',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 40,
              }}>
              <MaterialCommunityIcons
                name={
                  ifExistsMovie(data) || ifExistsShow(data)
                    ? 'star-outline'
                    : 'star'
                }
                color={
                  ifExistsMovie(data) || ifExistsShow(data)
                    ? 'white'
                    : '#64676D'
                }
                size={24}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MovieCard;
