import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/slices/counterSlice";
import { userSlice } from "./slices/usersSlice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		user: userSlice,
	},
});
