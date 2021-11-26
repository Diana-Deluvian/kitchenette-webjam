import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../search/searchSlice";
import { selectAuth } from "../auth/authSlice";
import { useSelector } from "react-redux";

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
    const globalState = action.getState();
    const token = globalState.auth.token;
    const data = await fetch(`${url}/recipe`, {
      method: 'POST',
      credentials: 'include',
      headers: {'Content-Type':'application/json', "Authorization": token}, 
      body: JSON.stringify(state),      
    });
    const json = await data.json();
    return json; 
  }
);

export const updateRecipe = createAsyncThunk(
  "allRecipes/updateRecipe",
  async(state, action) => {
    const globalState = action.getState();
    const token = globalState.auth.token;
    const data = await fetch(`${url}/recipe/${state._id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {'Content-Type':'application/json', "Authorization": token}, 
      body: JSON.stringify(state),      
    });
    const json = await data.json();
    return json;  
  }
)

export const deleteRecipe = createAsyncThunk(
  "allRecipes/deleteRecipe",
  async(state, action) => {
    const globalState = action.getState();
    const token = globalState.auth.token;
    const data = await fetch(`${url}/recipe/${state}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {'Content-Type':'application/json', "Authorization": token},      
    });
    const json = await data.json();
    return state; 
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
    },
    [deleteRecipe.fulfilled]: (state, action) => {
      state.recipes = state.recipes.filter(recipe => recipe._id !== action.payload);
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