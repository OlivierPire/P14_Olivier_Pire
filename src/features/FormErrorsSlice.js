import { createSlice } from "@reduxjs/toolkit";

const formErrorsSlice = createSlice({
	name: "formErrors",
	initialState: {
		firstName: false,
		lastName: false,
	},
	reducers: {
		setErrors: (state, action) => {
			state.firstName = action.payload;
		},
	},
});

export const {setErrors} = formErrorsSlice.actions;
export default formErrorsSlice.reducer;