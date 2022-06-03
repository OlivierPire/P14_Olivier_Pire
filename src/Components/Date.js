import React from "react";
import DatePicker from "react-datepicker";
import en from "date-fns/locale/en-GB";
import "react-datepicker/dist/react-datepicker.css";

/**
 * It's react date-picker
 * @param {string} label - label
 * @param {string} id - id
 * @param {number} setLabel - set Label change with useState
 * @param {boolean} labelErr - label Error
 * @param {*} state - state of teh date
 * @param {boolean} setLabelErr - set label Error
 * @returns date-picker
 */

const Date = ({ label, id, setLabel, labelErr, state, setLabelErr }) => {
	return (
		<React.Fragment>
			<label htmlFor={label}>{label}</label>
			<DatePicker
				className="date-picker"
				placeholderText={label}
				id={id}
				selected={state}
				onChange={(date) =>
					setLabel(date) & (date !== "") ? setLabelErr(false) : null
				}
				locale={en}
				dateFormat="dd/MM/yyyy"
			/>
			<span
				style={labelErr ? { display: "block" } : { display: "none" }}
				className="error"
			>
				Please, enter your {label}
			</span>
		</React.Fragment>
	);
};

export default Date;
