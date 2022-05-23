/**
 * It's for responsive, the function is played when the user is in mobile
 */
export const changeBackground = () => {
	if (window.location.pathname !== "/") {
		document.querySelector("body").style.background = "#EEEEEE";
	} else {
		document.querySelector("body").style.background = "#393E46";
	}
};
