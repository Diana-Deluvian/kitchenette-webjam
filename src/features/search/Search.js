import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchTerm,
  selectSearchTerm,
  setSearchTerm,
  setSearchCategory,
  selectSearchCategory,
  categories
} from "./searchSlice";


const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const searchCategory = useSelector(selectSearchCategory);

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const onSearchTermClearHandler = () => {
    dispatch(clearSearchTerm());
  };

  const onSearchCategoryChangeHandler = (e) => {
    dispatch(setSearchCategory(e.target.textContent));
  }

  const categoryClassList = [`w-max text-center px-4 py-2 cursor-pointer
  hover:bg-primary hover:text-white duration-300 ease-in`];

  return (
    <div className="flex flex-col w-xl items-center min-w-24 mt-8 border-t-2 border-primary" id="search-container">
      <div className="flex flex-wrap justify-center ">
        {categories.map(category => <span 
        onClick={onSearchCategoryChangeHandler}
        className={`${categoryClassList} 
        ${searchCategory === category ? 'bg-primary text-white' : null}`}>{category}</span>)}
      </div>
      <div className="flex m-2 relative border-b-2 border-primary">
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearchChangeHandler}
        placeholder="Search recipes"
        className="text-center outline-none mt-2"
      />
      {searchTerm.length > 0 && (
        <button
          onClick={onSearchTermClearHandler}
          type="button"
          id="search-clear-button"
          className="text-primary absolute right-2 "
        >
          X
        </button>
      )}
      </div>
    </div>
  );
};

export default Search;