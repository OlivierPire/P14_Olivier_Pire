import React, { useState } from "react";
import Errors from "./Errors";

/**
 * Is a simple input with id, label, type of input and regex for verification.
 * @param {*} param0
 * @returns {React.ReactElement}
 */

const Input = ({ id, label, type, regex }) => {
	const [error, setError] = useState(false);

	return (
		<React.Fragment>
			<label htmlFor={id}>{label}</label>
			<input
				required
				id={id}
				type={type}
				onChange={
					(e) => (regex.test(e.target.value) ? setError(false) : setError(true)) // On change, i test if the e.target.value matches a regex in the props to display Errors component
				}
				placeholder={label}
			/>
			{error ? (
				<Errors
					content={"Please enter your " + label}
					errorClassName={id + "-error"}
				/>
			) : (
				""
			)}
		</React.Fragment>
	);
};

export default Input;
