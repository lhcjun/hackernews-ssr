import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SearchBar: React.FC = (): JSX.Element => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  const onInputChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // push user input to url router
    router.push({
      query: { searchTerm: searchValue },
    });
  };

  return (
    <form onSubmit={onHandleSubmit} className="search-area">
      <input
        type="search"
        // value={searchValue}
        placeholder="News Keyword"
        onChange={onInputChange}
        className="search-box"
      />
      <button className="search-btn">
        <img src="./static/search.svg" alt="search" height="17" />
      </button>
    </form>
  );
};

export default SearchBar;
