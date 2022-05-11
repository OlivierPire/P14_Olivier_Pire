import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ name, id, elements, className }) => {
	const [open, setOpen] = useState(false);
	const [elementSelected, setElementSelected] = useState('---')
	
	return (
		<div className={className}>
			<div className="select-label">
				{name.charAt(0).toUpperCase() + name.slice(1)}
			</div>
				<div id={id} className="select-bar" onClick={() => setOpen(!open)}>{elementSelected} {<FontAwesomeIcon icon={open ? faCaretUp : faCaretDown} />}
					<div className={open === true ? "display-list" : 'hidden-list'} >
						{elements.map((element) => (
							<span key={element} onClick={() => setElementSelected(element) & setOpen(false)}>{element}</span>
						))}
					</div>
				</div>
		</div>
	);
};

export default Dropdown;
