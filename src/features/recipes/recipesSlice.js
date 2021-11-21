import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../search/searchSlice";

export const loadRecipes = createAsyncThunk(
  "allRecipes/getRecipes",
  async () => {
    const data = await fetch("https://random-data-api.com/api/cannabis/random_cannabis?size=10");
    const json = await data.json();
    return json;
  }
);

const sliceOptions = {
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: {
    [loadRecipes.pending]: (state, action) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadRecipes.fulfilled]: (state, action) => {
      state.recipes = action.payload;
      state.isLoading = false;
      state.hasError = false;
    },
    [loadRecipes.rejected]: (state, action) => {
      state.isLoading = false;
      state.hasError = true;
    }
  }
}

export const recipesSlice = createSlice(sliceOptions);

export const selectRecipes = (state) => state.allRecipes.recipes;

export const selectFilteredRecipes = (state) => {
  const recipes = selectRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return recipes.filter((recipe) =>
    recipe.strain.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default recipesSlice.reducer;