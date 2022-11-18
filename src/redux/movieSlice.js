import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import movieApi from '../api/movieApi';
import {APIKey} from '../utils/index';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async term => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`,
    );
    return response.data;
  },
);

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async term => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`,
    );
    return response.data;
  },
);

export const fetchAsyncItemDetail = createAsyncThunk(
  'movies/fetchAsyncItemDetail',
  async id => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  },
);

const initialState = {
  movies: [],
  shows: [],
  itemSelected: [],
  favMovies: [],
  favShows: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedItem: state => {
      state.itemSelected = [];
    },
    addFavMovies: (state, {payload}) => {
      console.log('Filme Adicionado!');
      return {...state, favMovies: [...state.favMovies, payload]};
    },
    addFavShows: (state, {payload}) => {
      console.log('Série Adicionada!');
      return {...state, favShows: [...state.favShows, payload]};
    },
    removeFavMovie: (state, {payload}) => {
      return {
        ...state,
        favMovies: state.favMovies.filter(movies => movies.id !== payload.id),
      };
    },
    removeFavShow: (state, {payload}) => {
      return {
        ...state,
        favShows: state.favShows.filter(shows => shows.id !== payload.id),
      };
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log('Pending');
    },
    [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
      console.log('Fetched Successfully!');
      return {...state, movies: payload};
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log('Rejected!');
    },
    [fetchAsyncShows.fulfilled]: (state, {payload}) => {
      console.log('Fetched Successfully!');
      return {...state, shows: payload};
    },
    [fetchAsyncItemDetail.fulfilled]: (state, {payload}) => {
      console.log('Fetched Successfully!');
      return {...state, itemSelected: payload};
    },
  },
});

//Exportando os estados salvos nas variáveis para serem usadas nos hooks
export const {removeSelectedItem} = movieSlice.actions;
export const {addFavMovies} = movieSlice.actions;
export const {addFavShows} = movieSlice.actions;
export const {removeFavMovie} = movieSlice.actions;
export const {removeFavShow} = movieSlice.actions;
export const getAllMovies = state => state.movies.movies;
export const getAllShows = state => state.movies.shows;
export const getFavMovies = state => state.movies.favMovies;
export const getFavShows = state => state.movies.favShows;
export const getSelectedItemDetail = state => state.movies.itemSelected;
export default movieSlice.reducer;
