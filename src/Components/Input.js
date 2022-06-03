import React from "react";

/**
 * It's input component
 * @param {string} label - label
 * @param {boolean} labelErr - label error
 * @param {boolean} setLabelErr - set label error
 * @param {string} setLabel - set label 
 * @param {any} regex - regex
 * @param {string} type - type of the input 
 * @param {string} id - id
 * @returns date-picker
 */

const Input = ({ label, labelErr, setLabelErr, setLabel, regex, type, id }) => {
	return (
			<div className="input">
				<label htmlFor={id}>{label}</label>
				<input
					id={id}
					placeholder={label}
					type={type}
					onChange={(e) =>
						!regex.test(e.target.value)
							? setLabelErr(true)
							: setLabelErr(false) & setLabel(e.target.value)
					}
				/>
				<span
					style={labelErr ? { display: "block" } : { display: "none" }}
					className="error"
				>
					Please, enter your {label}
				</span>
			</div>
	);
};

export default Input;
