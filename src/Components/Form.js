import React from "react";
import Input from "./Input";
import { displayModal } from "./DisplayModal";
import { states } from "../Data/States";
import { departments } from "../Data/Departments";
import Dropdown from "./Dropdown";
import Date from "./Date";
import { formValidator, numberRegex, stringRegex } from "./FormValidator";

const Form = () => {

	return (
		<div className="form">
			<form action="#" id="create-employee">
				<div className="inputs-block">
					<fieldset className="main-informations">
						<legend>Main Informations</legend>
						<Input id="first-name" label="First Name" type="text" regex={stringRegex} />
						<span className="first-name-error error">Please, enter your first name</span>
						<Input id="last-name" label="Last Name" type="text" regex={stringRegex} />
						<span className="last-name-error error">Please, enter your last name</span>
						<label htmlFor="date-of-birth">Date</label>
						<Date className="date-of-birth" id="date-of-birth" label='Date' state='dateOfBirth'/>
						<span className="date-of-birth-error error">Please, enter your first name</span>
						<label htmlFor="start-date">Start Date</label>
						<Date className='start-date' id="start-date" label='Start Date' state='startDate'/>
						<span className="start-date error">Please, enter your first name</span>
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
