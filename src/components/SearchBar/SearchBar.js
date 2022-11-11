import React, {useState} from 'react';
import {Searchbar} from 'react-native-paper';

const SearchBar = () => {
  const [term, setTerm] = useState('');

  const onChangeSearch = query => setTerm(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
