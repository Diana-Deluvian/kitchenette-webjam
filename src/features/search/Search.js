import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchTerm,
  selectSearchTerm,
  setSearchTerm,
} from "./searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const onSearchTermClearHandler = () => {
    dispatch(clearSearchTerm());
  };

  const category = [`w-20 text-center py-2 
  hover:bg-primary hover:text-white duration-300 ease-in`];

  return (
    <div className="flex flex-col items-center min-w-24 max-w-lg mt-8 border-t-2 border-primary" id="search-container">
      <div className="flex">
        <span className={category}>Soups</span>
        <span className={category}>Chicken</span>
        <span className={category}>All</span>
        <span className={category}>Beef</span>
        <span className={category}>Comfort</span>
      </div>
      <div className="flex m-2 relative border-b-2 border-primary">
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchChangeHandler}
        placeholder="Search recipes"
        className="text-center"
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onSearchTermClearHandler}
          type="button"
          id="search-clear-button"
          className="text-primary absolute right-2"
        >
          X
        </button>
      )}
      </div>
    </div>
  );
};

export default Search;