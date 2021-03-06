import React from "react";
import { changeBackground } from "../Functions/ChangeBackground";
import "../Styles/index.scss";
import Form from "../Components/Form";
import Header from "../Components/Header"

/**
 * It's the CreateEmployee page (Homepage)
 * @returns {React.ReactElement}
 */

const CreateEmployee = () => {

	// I use window.innerWidth to change background color when the user window width is smaller than 681px
	// I use it on page load and on resize with eventListener
	if (window.innerWidth < 681) {
		changeBackground();
	} else {
		document.querySelector("body").style.background = "#EEEEEE";
	}

	window.addEventListener("resize", () => {
		if (window.innerWidth < 681) {
			changeBackground();
		} else {
			document.querySelector("body").style.background = "#EEEEEE";
		}
	});

	return (
		<div>
			<div className="create-employee-container">
				<div className="background-modal"></div>
				<Header />
				<Form />
			</div>
		</div>
	);
};

export default CreateEmployee;
