import React from "react";

/**
 * This component displays errors when the user submit the form
 * @param {string} content
 * @returns {React.ReactElement}
 */

const Errors = ({ content, errorClassName }) => {
	const style = {
		display: "block",
	};
	return (
		<div>
			<span className={errorClassName + " error"} style={style}>
				{content}
			</span>
		</div>
	);
};

export default Errors;
