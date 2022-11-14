import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MovieCard = props => {
  const {data} = props;
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
              onPress={() => console.log('Favoritado!')}
              activeOpacity={0.7}
              style={{
                flexDirection: 'row',
                padding: 2,
                backgroundColor: '#2D3038',
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                height: 40,
                width: 40,
              }}>
              <MaterialCommunityIcons
                name="star-outline"
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

export default MovieCard;
