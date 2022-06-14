// import configurestore
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter-slice";
// export store
export const store = configureStore({
	reducer: {
		counter: counterSlice,
	},
});
//infer appdispatch rootstate
export type RootState = ReturnType<typeof store.getState>;
// Infers the type of the reducers
export type AppDispatch = typeof store.dispatch;

// import the provider in the root app
