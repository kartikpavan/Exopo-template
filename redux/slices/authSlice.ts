import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
   isAuthenticated: boolean;
   token: string | null;
}

const initialState: AuthState = {
   isAuthenticated: true,
   token: null,
};

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      login: (state, action: PayloadAction<string>) => {
         state.isAuthenticated = true;
         state.token = action.payload;
      },
      logout: (state) => {
         state.isAuthenticated = false;
         state.token = null;
      },
   },
});

export const AuthSelector = (state: { auth: AuthState }) => state.auth;

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
