import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../search/searchSlice";

const url = "https://dianas-kitchenette-server.herokuapp.com";

export const loadRecipes = createAsyncThunk(
  "allRecipes/getRecipes",
  async () => {
    const data = await fetch(`${url}/recipes`);
    const json = await data.json();
    return json;
  }
);


export const createRecipe = createAsyncThunk(
  "allRecipes/createRecipe",
  async (state, action) => {
    const data = await fetch(`${url}/recipe`, {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(state),      
    });
    const json = await data.json();
    return json; 
  }
);

export const updateRecipe = createAsyncThunk(
  "allRecipes/updateRecipe",
  async(state, action) => {
    const data = await fetch(`${url}/recipe/${state._id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(state),      
    });
    const json = await data.json();
    return json;  
  }
)

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
    },
    [createRecipe.fulfilled]: (state, action) => {
      state.recipes.push(action.payload);
    },
    [updateRecipe.fulfilled]: (state, action) => {
      state.recipes = state.recipes.filter(recipe => recipe._id !== action.payload._id);
      state.recipes.unshift(action.payload);
    }
  }
}

export const recipesSlice = createSlice(sliceOptions);

export const selectRecipes = (state) => state.allRecipes.recipes;



export const selectFilteredRecipes = (state) => {
  const recipes = selectRecipes(state);
  const searchTerm = selectSearchTerm(state);
  return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default recipesSlice.reducer;