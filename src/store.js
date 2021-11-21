import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./features/recipes/recipesSlice";
import searchReducer from "./features/search/searchSlice";

export default configureStore({
  reducer: {
    allRecipes: recipesReducer,
    search: searchReducer,
  },
});