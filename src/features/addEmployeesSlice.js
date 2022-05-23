import { PURGE } from "redux-persist";

/**
 * ADD_EMPLOYEE is action for add employee in the table
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {string || number} street 
 * @param {string} city 
 * @param {number} dateOfBirth 
 * @param {number} startDate 
 * @param {string} departments 
 * @returns 
 */

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

const initialState = { arr:[] };

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