import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moviesReducer from './movieSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favMovies', 'favShows'],
};

export const store = configureStore({
  reducer: {
    movies: persistReducer(persistConfig, moviesReducer),
  },
});
export const persistor = persistStore(store);
