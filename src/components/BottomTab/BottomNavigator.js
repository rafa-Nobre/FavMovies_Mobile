import React, {useState} from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';

const HomeRoute = () => <Text>Início</Text>;
const FavRoute = () => <Text>Favoritos</Text>;
const ProfileRoute = () => <Text>Perfil</Text>;
const OptionsRoute = () => <Text>Opções</Text>;

const BottomNavigator = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'home',
      title: 'Início',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'fav',
      title: 'Favoritos',
      focusedIcon: 'star',
      unfocusedIcon: 'star-outline',
    },
    {
      key: 'profile',
      title: 'Perfil',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
    {
      key: 'options',
      title: 'Opções',
      focusedIcon: 'options',
      unfocusedIcon: 'options-outline',
    },
  ]);

  const renderScenes = BottomNavigation.SceneMap({
    home: HomeRoute,
    fav: FavRoute,
    profile: ProfileRoute,
    options: OptionsRoute,
  });
  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScenes}
    />
  );
};

export default BottomNavigator;
