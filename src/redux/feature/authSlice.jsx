import { auth } from "@/auth/firebase";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	currentUser: "",
};

const authSlice = createSlice({
	name: auth,
	initialState,
	reducers: {
		login: (state, { payload }) => {
			state.currentUser = payload;
		},
		logout: (state) => {
			state.currentUser = "";
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
