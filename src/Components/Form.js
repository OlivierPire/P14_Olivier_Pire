import React, { useEffect, useState } from "react";
import { states } from "../Data/States";
import { departments } from "../Data/Departments";
import ReactSelect from "react-select";
import Modal from "modal-p14-olivier";
import Date from "./Date";
import store from "../app/store";
import { ADD_EMPLOYEE } from "../features/addEmployeesSlice";
import Input from "./Input";
import { displayModal } from "../Functions/DisplayModal";

const stringRegex = /^[A-Za-z]+$/;
const numberRegex = /^[0-9]+$/;
const streetRegex = /^[0-9a-zA-Z_]+$/;

/**
 * The form with each elements
 * @returns {React.ReactElement}
 */

const Form = () => {
	// States of all fields for received values
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [dateOfBirth, setDateOfBirth] = useState("");
	const [startDate, setStartDate] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [statesSelect, setStatesSelect] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [departmentsSelect, setDepartments] = useState("");

	// All error states
	const [firstNameErr, setFirstNameErr] = useState(false);
	const [lastNameErr, setLastNameErr] = useState(false);
	const [dateOfBirthErr, setDateOfBirthErr] = useState(false);
	const [startDateErr, setStartDateErr] = useState(false);
	const [streetErr, setStreetErr] = useState(false);
	const [cityErr, setCityErr] = useState(false);
	const [statesErr, setStatesErr] = useState(false);
	const [zipCodeErr, setZipCodeErr] = useState(false);
	const [departmentsErr, setDepartmentsErr] = useState(false);

	/**
	 * handleSubmit checks if all fields are valid or not to add the errors
	 * Then if the fields are correct, handleSubmit dispatch all the values in the states to create a new employee and display the modal 
	 */
	const handleSubmit = () => {
		if (!stringRegex.test(firstName)) {
			setFirstNameErr(true);
		}
		if (!stringRegex.test(lastName)) {
			setLastNameErr(true);
		}
		if (dateOfBirth) {
			if (dateOfBirth === "") {
				setDateOfBirthErr(true);
			} else {
				setDateOfBirthErr(false);
			}
		} else {
			setDateOfBirthErr(true);
		}
		if (startDate) {
			if (startDate === "") {
				setStartDateErr(true);
			} else {
				setStartDateErr(false);
			}
		} else {
			setStartDateErr(true);
		}
		if (city === "") {
			setCityErr(true);
		}
		if (statesSelect === "") {
			setStatesErr(true);
		} else {
			setStatesErr(false);
		}
		if (!numberRegex.test(zipCode)) {
			setZipCodeErr(true);
		}
		if (departmentsSelect === "") {
			setDepartmentsErr(true);
		} else {
			setDepartmentsErr(false);
		}
		if (!streetRegex.test(street)) {
			setStreetErr(true);
		}

		if (
			stringRegex.test(firstName) &&
			stringRegex.test(lastName) &&
			streetRegex.test(street) &&
			stringRegex.test(city) &&
			numberRegex.test(zipCode) &&
			statesSelect !== "" &&
			departmentsSelect !== "" &&
			dateOfBirth !== "" &&
			startDate !== ""
		) {
			store.dispatch(
				ADD_EMPLOYEE([
					{
						firstName,
						lastName,
						startDate: document.querySelector("#start-date").value,
						street,
						state: statesSelect,
						city,
						zipCode,
						dateOfBirth: document.querySelector("#date-of-birth").value,
						department: departmentsSelect,
					},
				])
			);

			displayModal();
		}
	};


	useEffect(() => {
		document.querySelector(".modal-close-icon").addEventListener("click", () => {
			document.querySelector(".background-modal").style.display = "none";
		});
	});
	return (
		<div className="form">
			<form action="#" id="create-employee">
				<div className="inputs-block">
					<fieldset className="main-informations">
						<legend>Main Informations</legend>
						<Input
							id="first-name"
							type="text"
							label="First Name"
							regex={stringRegex}
							labelErr={firstNameErr}
							setLabelErr={setFirstNameErr}
							setLabel={setFirstName}
						/>
						<Input
							id="last-name"
							type="text"
							label="Last Name"
							regex={stringRegex}
							labelErr={lastNameErr}
							setLabelErr={setLastNameErr}
							setLabel={setLastName}
						/>
						<Date
							label={"Date of birth"}
							id="date-of-birth"
							setLabel={setDateOfBirth}
							labelErr={dateOfBirthErr}
							state={dateOfBirth}
							setLabelErr={setDateOfBirthErr}
						/>
						<Date
							label={"Start date"}
							id="start-date"
							setLabel={setStartDate}
							labelErr={startDateErr}
							state={startDate}
							setLabelErr={setStartDateErr}
						/>
					</fieldset>
					<fieldset className="address">
						<legend>Address</legend>
						<Input
							id="street"
							label="Street"
							type="text"
							regex={streetRegex}
							labelErr={streetErr}
							setLabelErr={setStreetErr}
							setLabel={setStreet}
						/>
						<Input
							id="city"
							label="City"
							type="text"
							regex={stringRegex}
							labelErr={cityErr}
							setLabelErr={setCityErr}
							setLabel={setCity}
						/>

						<label htmlFor="states">States</label>
						<ReactSelect
							id="states"
							options={states}
							onChange={(e) => setStatesSelect(e.abbreviation)}
							className="react-select-container"
							classNamePrefix="react-select"
							theme={(theme) => ({
								...theme,
								borderRadius: 7,
								colors: {
									...theme.colors,
									primary25: "#00ADB5",
									primary: "#393E46",
								},
							})}
						/>
						<span
							style={statesErr ? { display: "block" } : { display: "none" }}
							className="error"
						>
							Please, enter your state
						</span>
						<Input
							id="zip-code"
							label="Zip code"
							type="number"
							regex={numberRegex}
							labelErr={zipCodeErr}
							setLabelErr={setZipCodeErr}
							setLabel={setZipCode}
						/>
					</fieldset>
				</div>
				<label htmlFor="departments" className="label-dp">
					Departments
				</label>
				<ReactSelect
					placeholder="Departments"
					className="label-dp react-select-container"
					classNamePrefix="react-select"
					id="departments"
					menuPlacement="top"
					options={departments}
					onChange={(e) => setDepartments(e.value)}
					theme={(theme) => ({
						...theme,
						borderRadius: 7,
						colors: {
							...theme.colors,
							primary25: "#00ADB5",
							primary: "#393E46",
						},
					})}
				/>
				<span
					style={
						departmentsErr
							? { display: "block", textAlign: "center" }
							: { display: "none" }
					}
					className="error"
				>
					Please, enter your department
				</span>
			</form>
			<Modal content="Employee created!" />
			<button className="submit" onClick={() => handleSubmit()}>
				Save
			</button>
		</div>
	);
};

export default Form;
