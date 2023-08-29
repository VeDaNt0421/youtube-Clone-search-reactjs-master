import React, { useState } from 'react';
import { SearchWrapper, Search, SearchButton } from './searchBarStyles';

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const onSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  const onSearchClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <SearchWrapper>
      <Search
        type="search"
        placeholder="Type for search..."
        value={searchTerm}
        onChange={onSearchChange}
      />
      <SearchButton onClick={onSearchClick}>Search</SearchButton>
    </SearchWrapper>
  );
}

export default React.memo(SearchBar);
