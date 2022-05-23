import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import en from "date-fns/locale/en-GB";
import "react-datepicker/dist/react-datepicker.css";

/**
 * This component use react-datepicker for 'date of birth' and 'start date' inputs.
 * @param {string} className
 * @param {string} id
 * @param {string} label
 * @returns {React.ReactElement} datepicker
 */

const Date = ({ className, id, label }) => {
	const [startDate, setStartDate] = useState();

	return (
		<div id={id}>
			<DatePicker
				placeholderText={label}
				className={className}
				selected={startDate}
				onChange={(date) => setStartDate(date)}
				locale={en}
			/>
			<span className="date-error">Please enter your {label} </span>
		</div>
	);
};

export default Date;
