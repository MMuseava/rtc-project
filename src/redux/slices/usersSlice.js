import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userInfo: {
		name: "",
		lastLoginTime: "",
		isAuthenticated: false,
	},
};
export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			state.userInfo = action.payload;
		},
		logout: (state) => {},
	},
});
// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
