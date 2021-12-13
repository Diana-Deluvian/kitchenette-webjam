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
      isAuth: localStorage.getItem('token') ? true : false,
      hasError: false,
      token: localStorage.getItem('token') || '',
  },
  reducers: {
    clearAuth: () => {
      localStorage.removeItem('token');
      return {isAuth: false, hasError: false, token: ''}
    }
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isAuth = false;
      state.hasError = false;
    },
    [login.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
      state.isAuth = true;
      state.hasError = false;
    },
    [login.rejected]: (state, action) => {
      state.hasError = true;
    }
}
});

export const {clearAuth} = authSlice.actions;

export const selectAuth = (state) => state.auth.token;
export const selectIsAuth = (state) => state.auth.isAuth;

export default authSlice.reducer;