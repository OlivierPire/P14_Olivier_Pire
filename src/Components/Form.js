import React, { useEffect } from "react";
import Input from "./Input";
import { states } from "../Data/States";
import { departments } from "../Data/Departments";
import Date from "./Date";
import { formValidator, numberRegex, streetRegex, stringRegex } from "../Functions/FormValidator";
import ReactSelect from "react-select";
import Modal from "modal-p14-olivier";

const Form = () => {
	useEffect(() => {
		document.querySelector('.modal-close-icon').addEventListener('click', () =>  {
			document.querySelector('.background-modal').style.display = 'none'
		})
	})
	return (
		<div className="form">
			<form action="#" id="create-employee">
				<div className="inputs-block">
					<fieldset className="main-informations">
						<legend>Main Informations</legend>
						<Input
							id="first-name"
							label="First Name"
							type="text"
							regex={stringRegex}
						/>
						<span className="first-name-error error">
							Please, enter your first name
						</span>
						<Input id="last-name" label="Last Name" type="text" regex={stringRegex} />
						<span className="last-name-error error">
							Please, enter your last name
						</span>
						<label htmlFor="date-of-birth">Date of birth</label>
						<Date
							className="date-of-birth"
							id="date-of-birth"
							label="Date of birth"
							state="dateOfBirth"
						/>
						<span className="date-of-birth-error error">
							Please, enter your date of birth
						</span>
						<label htmlFor="start-date">Start Date</label>
						<Date
							className="start-date"
							id="start-date"
							label="Start Date"
							state="startDate"
						/>
						<span className="start-date-error error">
							Please, enter your start date
						</span>
					</fieldset>
					<fieldset className="address">
						<legend>Address</legend>
						<Input id="street" label="Street" type="text" regex={streetRegex} />
						<span className="street-error error">Please, enter your street</span>
						<Input id="city" label="City" type="text" regex={stringRegex} />
						<span className="city-error error">Please, enter your city</span>
						<label htmlFor="states">States</label>
						<ReactSelect
							id="states"
							options={states}
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
						<span className="states-error error">Please, select your states</span>
						<Input id="zip-code" label="Zip Code" type="number" regex={numberRegex} />
						<span className="zip-code-error error">Please, enter your zip code</span>
					</fieldset>
				</div>
				<label htmlFor="departments" className="label-dp">Departments</label>
				<ReactSelect
					placeholder="Departments"
					className="label-dp react-select-container"
					classNamePrefix="react-select"
					id="departments"
					menuPlacement="top"
					options={departments}
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
				<span className="departments-error error label-dp">Please, select your departments</span>
			</form>
			<Modal content='Employee created' />
			<button className="submit" onClick={() => formValidator()}>
				Save
			</button>
		</div>
	);
};

export default Form;
