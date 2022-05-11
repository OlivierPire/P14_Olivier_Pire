import { createSlice } from "@reduxjs/toolkit";

const addEmployeesSlice = createSlice({
	name: "addEmployees",
	initialState: []
		// addEmployees: null,
		// firstName: null,
		// lastName: null,
		// street: null,
		// city: null,
		// zipCode: null,
		// dateOfBirth: null,
		// startDate: null,
		// stateSelect: null,
		// departmentSelect: null,
	,
	reducers: {
		addNewEmployee: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const {addNewEmployee} = addEmployeesSlice.actions;
export default addEmployeesSlice.reducer;