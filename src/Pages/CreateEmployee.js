import React from "react";
import store, { persistor } from "../app/store";
import { changeBackground } from "../Functions/ChangeBackground";
import Form from "../Components/Form";
import Header from "../Components/Header";
import Modal from "../Components/Modal";
import "../Styles/index.scss";

const CreateEmployee = () => {
	// persistor.purge()
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
				<Modal />
			</div>
		</div>
	);
};

export default CreateEmployee;
