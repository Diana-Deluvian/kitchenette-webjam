import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://dianas-kitchenette-server.herokuapp.com/users";

export const login = createAsyncThunk(
    "auth/login",
    async (state, action) => {
        const data = await fetch(`${url}/login`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(state),      
      });
      const json = await data.json();
      return json; 
    }
);

export const register = createAsyncThunk(
    "auth/register",
    async (state, action) => {
        const data = await fetch(`${url}/register`, {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(state),      
            });
        const json = await data.json();
        return json; 
    }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
      isAuth: false,
      hasError: false,
      token: ""
  },
  reducers: {},
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isAuth = false;
      state.hasError = false;
    },
    [login.fulfilled]: (state, action) => {
        console.log(state);
      state.token = action.payload.token;
      state.isAuth = true;
      state.hasError = false;
    },
    [login.rejected]: (state, action) => {
      state.hasError = true;
    }
}
});

export const {} = authSlice.actions;

export const selectAuth = (state) => state.auth.token;

export default authSlice.reducer;