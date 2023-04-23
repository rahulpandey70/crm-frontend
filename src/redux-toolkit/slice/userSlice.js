import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {},
	isLoading: false,
	error: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getUserPending: (state, action) => {
			state.isLoading = true;
		},
		getUserSuccess: (state, action) => {
			state.isLoading = false;
			state.user = action.payload;
			state.error = "";
		},
		getUserError: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { getUserPending, getUserSuccess, getUserError } =
	userSlice.actions;
export default userSlice.reducer;
