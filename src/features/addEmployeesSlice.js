import { createSlice } from "@reduxjs/toolkit";

const addEmployeesSlice = createSlice({
	name: "addEmployees",
	initialState: [],
	reducers: {
		addNewEmployee: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const { addNewEmployee } = addEmployeesSlice.actions;
export const { storageEmployee } = addEmployeesSlice.actions;
export default addEmployeesSlice.reducer;
