import React, { useState } from "react";
import Errors from "./Errors";

const Input = ({ id, label, type, regex }) => {
	const [error, setError] = useState(false);

	return (
		<React.Fragment>
			<label htmlFor={id}>{label}</label>
			<input
				required
				id={id}
				type={type}
				onChange={(e) =>
					regex.test(e.target.value) ? setError(false) : setError(true)
				}
				placeholder={label}
			/>
			{error ? <Errors content={'Please enter your ' + label} errorClassName={id + '-error'}/> : ''}
		</React.Fragment>
	);
};

export default Input;
