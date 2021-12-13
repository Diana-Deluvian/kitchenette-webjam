import { createSlice } from "@reduxjs/toolkit";

export const categories= ["Soups", "Pasta/Noodles", "Fresh", 
                          "All", "Oven Dishes", "Comfort", "Other"];

export const searchSlice = createSlice({
  name: "search",
  initialState: {term: "", category: "All"},
  reducers: {
    setSearchTerm: (state, action) => {state.term = action.payload},
    clearSearchTerm: (state) => {state.term = ""},
    setSearchCategory: (state, action) => {state.category = action.payload},
  },
});

export const { setSearchTerm, clearSearchTerm, setSearchCategory } = searchSlice.actions;

export const selectSearchTerm = (state) => state.search.term;
export const selectSearchCategory = (state) => state.search.category;

export default searchSlice.reducer;