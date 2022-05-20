export const changeBackground = () => {
	console.log(window.location.pathname);
	if(window.location.pathname !== '/') {
		document.querySelector('body').style.background = '#EEEEEE'
	} else {
		document.querySelector('body').style.background = '#393E46'
	}
}
