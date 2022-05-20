import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { PURGE } from "redux-persist";

export const ADD_EMPLOYEE = (
	firstName,
	lastName,
	street,
	city,
	dateOfBirth,
	startDate,
	departments
) => ({
	type: "ADD_EMPLOYEE",
	payload: {
		firstName,
		lastName,
		street,
		city,
		dateOfBirth,
		startDate,
		departments,
	},
});
const initialState = { arr:[]};

const reducer = (state = initialState, action) => {
		switch(action.type) {
			case 'ADD_EMPLOYEE': return {
				...state,
				arr : state.arr.concat(action.payload.firstName)
			}
			case PURGE: {
				return initialState
			}
			default: 
				return initialState
		}
};

export default reducer;
// const addEmployeesSlice = createSlice({
// 	name: "addEmployees",
// 	initialState: [],
// 	reducers: {
// 		addNewEmployee: (state, action) => {
// 			state.push(action.payload);
// 		},
// 	},
// });

// export const { addNewEmployee } = addEmployeesSlice.actions;
// export default addEmployeesSlice.reducer;
