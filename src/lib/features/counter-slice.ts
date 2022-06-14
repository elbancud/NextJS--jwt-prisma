// import
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	value: number;
}
const initialState: CounterState = {
	value: 0,
};

export const counter = createSlice({
	name: "count",
	initialState,
	reducers: {
		incremented: (state) => {
			state.value++;
		},
		amountAdded: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
});
export const { incremented, amountAdded } = counter.actions;
export default counter.reducer;
