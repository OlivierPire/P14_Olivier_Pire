import store from "../app/store";
import { addNewEmployee } from "../features/addEmployeesSlice";
import { displayModal } from "./DisplayModal";

export const stringRegex = /^[A-Za-z]+$/;
export const numberRegex = /^[0-9]+$/;

export const formValidator = () => {
	const dateOfBirth = document.querySelector(".date-of-birth").value;
	const startDate = document.querySelector(".start-date").value;
	const firstName = document.querySelector("#first-name").value;
	const lastName = document.querySelector("#last-name").value;
	const street = document.querySelector("#street").value;
	const city = document.querySelector("#city").value;
	const zipCode = document.querySelector("#zip-code").value;

	if (
        firstName && lastName && startDate && street && city && zipCode !== ''
        ) {
            store.dispatch(
                addNewEmployee({
                    firstName,
                    startDate,
                    lastName,
                    street,
                    city,
                    zipCode,
                    dateOfBirth,
                })
                );
                displayModal();
                
	}
};
