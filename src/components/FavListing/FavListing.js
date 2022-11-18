import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {
  removeFavMovie,
  removeFavShow,
  getFavMovies,
  getFavShows,
} from '../../redux/movieSlice';
import styles from './styles';

const FavListing = () => {
  const {favMovies} = useSelector(getFavMovies);
  const {favShows} = useSelector(getFavShows);
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

  const renderMovies = ({data}) => {
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
                onPress={() => handleRemoveFavMovie(data)}
                activeOpacity={0.7}
                style={{
                  flexDirection: 'row',
                  padding: 2,
                  backgroundColor: '#3393ED',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40,
                }}>
                <MaterialCommunityIcons
                  name="star-remove"
                  color="#64676D"
                  size={24}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderShows = ({data}) => {
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
                onPress={() => handleRemoveFavShow(data)}
                activeOpacity={0.7}
                style={{
                  flexDirection: 'row',
                  padding: 2,
                  backgroundColor: '#3393ED',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 40,
                  width: 40,
                }}>
                <MaterialCommunityIcons
                  name="star-remove"
                  color="#64676D"
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
    <View style={{flex: 1, backgroundColor: '#ED8D33'}}>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Filmes</Text>
        <View style={{flex: 1, marginTop: 8}}>
          {favMovies.length === 0 ? (
            <Text>Nossa que vazio!</Text>
          ) : (
            {
              /* Tag Flatlist aqui */
            }
          )}
          <FlatList
            data={favMovies}
            renderItem={renderMovies} //({item}) => <MovieCard data={item} />
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        </View>
      </View>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <Text style={{color: 'white', fontSize: 22}}>Séries</Text>
        <View style={{flex: 1, marginTop: 8}}>
          {favShows.length === 0 ? (
            <Text>Nossa que vazio!</Text>
          ) : (
            {
              /* Tag Flatlist aqui */
            }
          )}
          <FlatList
            data={favShows}
            renderItem={renderShows}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        </View>
      </View>
    </View>
  );
};

export default FavListing;
