import { PURGE } from "redux-persist";

/**
 * ADD_EMPLOYEE is action for add employee in the table
 * @param {string} firstName - employee's first name
 * @param {string} lastName - employee's last name
 * @param {string || number} street - employee's street
 * @param {string} city - employee's city
 * @param {number} dateOfBirth - employee's date of birth
 * @param {number} startDate - employee's start date
 * @param {string} departments - employee's departments
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
				arr : state.arr.concat(action.payload.firstName) // New employee information is add to arr[] with concat function
			}
			case PURGE: {
				return initialState // To initialize the state, use Persitor.purge()
			}
			default: 
				return initialState
		}
};

export default reducer;