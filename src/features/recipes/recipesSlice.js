import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm, selectSearchCategory } from "../search/searchSlice";

const url = "https://dianas-kitchenette-server.herokuapp.com";
//const url = "http://localhost:8080"

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
    const { token } = action.getState().auth;
    const data = await fetch(`${url}/recipe`, {
      method: 'POST',
      credentials: 'include',
      headers: { "Authorization": token}, 
      body: state    
    });
    const json = await data.json();
    return json; 
  }
);

export const updateRecipe = createAsyncThunk(
  "allRecipes/updateRecipe",
  async(state, action) => {
    const { token } = action.getState().auth;
    const _id = state.get('_id');
    const data = await fetch(`${url}/recipe/${_id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: { "Authorization": token},  
      body: state,      
    });
    const json = await data.json();
    return json;  
  }
)

export const deleteRecipe = createAsyncThunk(
  "allRecipes/deleteRecipe",
  async(state, action) => {
    const { token } = action.getState().auth;
    const data = await fetch(`${url}/recipe/${state}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {'Content-Type':'application/json', "Authorization": token},      
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
    hasError: false,
    isCRUDLoading: false,
    isReqSuccess: null,
  },
  reducers: {
    resetIsReqSuccess: (state) => {state.isReqSuccess = null},
  },
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
    [createRecipe.pending]: (state, action) => {
      state.isCRUDLoading = true;
    },
    [createRecipe.fulfilled]: (state, action) => {
      state.recipes.unshift(action.payload);
      state.isCRUDLoading = false;
      state.isReqSuccess = true;
    },
    [createRecipe.rejected]: (state, action) => {
      state.isCRUDLoading = false;
    },
    [updateRecipe.pending]: (state, action) => {
      state.isCRUDLoading = true;
    },
    [updateRecipe.fulfilled]: (state, action) => {
      state.recipes = state.recipes.filter(recipe => recipe._id !== action.payload._id);
      state.recipes.unshift(action.payload);
      state.isCRUDLoading = false;
      state.isReqSuccess = true;
    },
    [updateRecipe.rejected]: (state, action) => {
      state.isCRUDLoading = false;
    },
    [deleteRecipe.fulfilled]: (state, action) => {
      state.recipes = state.recipes.filter(recipe => recipe._id !== action.payload);
    }
  }
}

export const recipesSlice = createSlice(sliceOptions);

export const selectRecipes = (state) => state.allRecipes.recipes;

export const selectIsCRUDLoading = (state) => state.allRecipes.isCRUDLoading;

export const selectIsReqSuccess = (state) => state.allRecipes.isReqSuccess;

export const selectFilteredRecipes = (state) => {
  const recipes = selectRecipes(state);
  const searchTerm = selectSearchTerm(state);
  const category = selectSearchCategory(state);
  if(category === 'All')
    return recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  else{
    return recipes.filter((recipe) => {
      return recipe.category === category && recipe.name.toLowerCase().includes(searchTerm.toLowerCase() )
    });
    
  }
  
};

export const {resetIsReqSuccess} = recipesSlice.actions;

export default recipesSlice.reducer;