import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./features/recipes/recipesSlice";
import searchReducer from "./features/search/searchSlice";
import authReducer from "./features/auth/authSlice";

export default configureStore({
  reducer: {
    allRecipes: recipesReducer,
    search: searchReducer,
    auth: authReducer
  },
});