import React, { useState } from "react";
import Errors from "./Errors";

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
			<Errors content={'Please enter your ' + label} errorClassName={id + '-error'}/>

			{/* <span className="error">{error ? `Please enter your ${label}` : ""}</span> */}
		</React.Fragment>
	);
};

export default Input;
