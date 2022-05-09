import React from "react";
import Input from "./Input";
import { displayModal } from "./DisplayModal";
import { states } from "../Data/States";
import { departments } from "../Data/Departments";
import Dropdown from "./Dropdown";
import Date from "./Date";

const Form = () => {
	const firstName = document.querySelector('#first-name')
	
	return (
		<div className="form">
			<form action="#" id="create-employee">
				<div className="inputs-block">
					<fieldset className="main-informations">
						<legend>Main Informations</legend>
						<Input id="first-name" label="First Name" type="text" />
						<Input id="last-name" label="Last Name" type="text" />
						<label htmlFor="date-of-birth">Date</label>
						<Date id="date-of-birth" label='Date'/>
						<label htmlFor="start-date">Start Date</label>
						<Date id="start-date" label='Start Date'/>
					</fieldset>
					<fieldset className="address">
						<legend>Address</legend>
						<Input id="street" label="Street" type="text" />
						<Input id="city" label="City" type="text" />
						<Dropdown
							name="state"
							id="state"
							elements={states.map((value) => (
								value.name
							))}
						/>
						<Input id="zip-code" label="Zip Code" type="number" />
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
			<button className="submit" onClick={() => displayModal()}>Save</button>
		</div>
	);
};

export default Form;
