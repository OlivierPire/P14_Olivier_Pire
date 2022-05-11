import React, { useState } from "react";

const Input = ({ id, label, type, regex }) => {
	const [error, setError] = useState(false);
	const errorStyle = {
		border: "1px solid red",
	};

	return (
		<React.Fragment>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type={type}
				onChange={(e) =>
					regex.test(e.target.value) ? setError(false) : setError(true)
				}
			/>
			<span className="error">{error ? `Please enter your ${label}` : ""}</span>
		</React.Fragment>
	);
};

export default Input;
