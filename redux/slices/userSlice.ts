import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
   name: string;
   email: string;
   phoneNumber: string;
   role: string;
   // Add more properties as needed
}

const initialState: UserState = {
   name: "",
   email: "",
   phoneNumber: "",
   role: "",
};

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUserDetails: (state, action: PayloadAction<UserState>) => {
         return { ...state, ...action.payload };
      },
      updateUserDetails: (
         state,
         action: PayloadAction<{ key: keyof UserState; value: string }>
      ) => {
         const { key, value } = action.payload;
         state[key] = value;
      },
      clearUserDetails: (state) => {
         return initialState;
      },
   },
});

export const { setUserDetails, updateUserDetails, clearUserDetails } = userSlice.actions;

export default userSlice.reducer;
