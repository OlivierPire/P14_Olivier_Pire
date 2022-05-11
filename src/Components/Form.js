import React from "react";
import Input from "./Input";
import { displayModal } from "./DisplayModal";
import { states } from "../Data/States";
import { departments } from "../Data/Departments";
import Dropdown from "./Dropdown";
import Date from "./Date";
import { formValidator, numberRegex, stringRegex } from "./FormValidator";
import store from "../app/store";

const Form = () => {
	const firstName = document.querySelector('#first-name')
	console.log(store.getState().addEmployees[0])
	return (
		<div className="form">
			<form action="#" id="create-employee">
				<div className="inputs-block">
					<fieldset className="main-informations">
						<legend>Main Informations</legend>
						<Input id="first-name" label="First Name" type="text" regex={stringRegex} />
						<Input id="last-name" label="Last Name" type="text" regex={stringRegex} />
						<label htmlFor="date-of-birth">Date</label>
						<Date className="date-of-birth" id="date-of-birth" label='Date' state='dateOfBirth'/>
						<label htmlFor="start-date">Start Date</label>
						<Date className='start-date' id="start-date" label='Start Date' state='startDate'/>
					</fieldset>
					<fieldset className="address">
						<legend>Address</legend>
						<Input id="street" label="Street" type="text" regex={stringRegex} />
						<Input id="city" label="City" type="text" regex={stringRegex} />
						<Dropdown
							name="state"
							id="state"
							elements={states.map((value) => (
								value.name
							))}
						/>
						<Input id="zip-code" label="Zip Code" type="number" regex={numberRegex}/>
					</fieldset>
				</div>
				<Dropdown
					className="label-dp"
					name="department"
					id="department"
					elements={departments.map((value) => (
						value
					))}
				/>
			</form>
			<button className="submit" onClick={() => formValidator()}>Save</button>
		</div>
	);
};

export default Form;
