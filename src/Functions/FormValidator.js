import store from "../app/store";
import { ADD_EMPLOYEE } from "../features/addEmployeesSlice";
import { displayModal } from "./DisplayModal";
import { states } from "../Data/States";

/**
 * Form Validator play when the user click on submit in form
 */

export const stringRegex = /^[A-Za-z]+$/;
export const numberRegex = /^[0-9]+$/;
export const streetRegex = /^[0-9a-zA-Z_]+$/;

export const formValidator = async () => {
	const statesValue = await document.querySelector(
		"#states .react-select__single-value"
	);
	let state; // State abbreviation for push in table
	if (statesValue) {
		states.forEach((e) =>
			statesValue.textContent === e.value ? (state = e.abbreviation) : ""
		); // If statesValue(In form) matches with states.value (In datas) i push the abbreviation in state variable.
	}
	const dateOfBirth = document.querySelector(".date-of-birth").value;
	const startDate = document.querySelector(".start-date").value;
	const firstName = document.querySelector("#first-name").value;
	const lastName = document.querySelector("#last-name").value;
	const street = document.querySelector("#street").value;
	const city = document.querySelector("#city").value;
	const zipCode = document.querySelector("#zip-code").value;
	const department = document.querySelector(
		"#departments .react-select__single-value"
	);

	if (statesValue == null) {
		document.querySelector(".states-error").style.display = "block";
	} else {
		document.querySelector(".states-error").style.display = "none";
	}

	if (department == null) {
		document.querySelector(".departments-error").style.display = "block";
	} else {
		document.querySelector(".departments-error").style.display = "none";
	}

	if (!numberRegex.test(zipCode)) {
		document.querySelector(".zip-code-error").style.display = "block";
	} else {
		document.querySelector(".zip-code-error").style.display = "none";
	}

	if (!stringRegex.test(firstName)) {
		document.querySelector(".first-name-error").style.display = "block";
	} else {
		document.querySelector(".first-name-error").style.display = "none";
	}

	if (!stringRegex.test(lastName)) {
		document.querySelector(".last-name-error").style.display = "block";
	} else {
		document.querySelector(".last-name-error").style.display = "none";
	}

	if (!stringRegex.test(street)) {
		document.querySelector(".street-error").style.display = "block";
	} else {
		document.querySelector(".street-error").style.display = "none";
	}

	if (!stringRegex.test(city)) {
		document.querySelector(".city-error").style.display = "block";
	} else {
		document.querySelector(".city-error").style.display = "none";
	}

	if (startDate === "") {
		document.querySelector(".start-date-error").style.display = "block";
	} else {
		document.querySelector(".start-date-error").style.display = "none";
	}

	if (dateOfBirth === "") {
		document.querySelector(".date-of-birth-error").style.display = "block";
	} else {
		document.querySelector(".date-of-birth-error").style.display = "none";
	}

	if (
		stringRegex.test(firstName) &&
		stringRegex.test(lastName) &&
		streetRegex.test(street) &&
		stringRegex.test(city) &&
		numberRegex.test(zipCode) &&
		statesValue !== null &&
		department !== null &&
		dateOfBirth !== "" &&
		startDate !== ""
	) {
		store.dispatch(
			ADD_EMPLOYEE([
				{
					firstName,
					lastName,
					startDate,
					street,
					state,
					city,
					zipCode,
					dateOfBirth,
					department: department.textContent,
				},
			])
		);

		displayModal();
	}
};
