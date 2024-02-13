import { createSlice } from "@reduxjs/toolkit";

//[count , setCount]= useState(0)
const initialState = {
	count: 0,
	name: "geek",
	address: {
		city: "Des Planes",
		state: "Il",
	},
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		incrementByAmount: (state, action) => {
			state.count += action.payload;
		},
		multiplyByAmount: (state, action) => {
			state.count *= action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multiplyByAmount } =
	counterSlice.actions;

export default counterSlice.reducer;
