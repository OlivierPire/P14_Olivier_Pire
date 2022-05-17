import React from "react";

const SearchBar = () => {
	return (
		<div>
			<input
				className="searchbar"
				type="search"
				placeholder="search in table"
				onChange={(e) => {
					for (
						let i = 0;
						i < document.querySelectorAll(".rows-content").length;
						i++
					) {
						document.querySelectorAll(".rows-content")[i].childNodes.forEach((e) => {
							return e.textContent.toLowerCase() === e.textContent.toUpperCase();
						});
						if (
							document
								.querySelectorAll(".rows-content")
								[i].childNodes[0].textContent.toLowerCase()
								.includes(e.target.value.toLowerCase()) ||
							document
								.querySelectorAll(".rows-content")
								[i].childNodes[1].textContent.toLowerCase()
								.includes(e.target.value.toLowerCase()) ||
							document
								.querySelectorAll(".rows-content")
								[i].childNodes[2].textContent.toLowerCase()
								.includes(e.target.value.toLowerCase()) ||
							document
								.querySelectorAll(".rows-content")
								[i].childNodes[3].textContent.toLowerCase()
								.includes(e.target.value.toLowerCase()) ||
							document
								.querySelectorAll(".rows-content")
								[i].childNodes[4].textContent.toLowerCase()
								.includes(e.target.value.toLowerCase()) ||
							document
								.querySelectorAll(".rows-content")
								[i].childNodes[5].textContent.toLowerCase()
								.includes(e.target.value.toLowerCase()) ||
							document
								.querySelectorAll(".rows-content")
								[i].childNodes[6].textContent.toLowerCase()
								.includes(e.target.value.toLowerCase()) ||
							document
								.querySelectorAll(".rows-content")
								[i].childNodes[7].textContent.toLowerCase()
								.includes(e.target.value.toLowerCase()) ||
							document
								.querySelectorAll(".rows-content")
								[i].childNodes[8].textContent.toLowerCase()
								.includes(e.target.value.toLowerCase())
						) {
							document.querySelectorAll(".rows-content")[i].style.display =
								"table-row";
						} else {
							document.querySelectorAll(".rows-content")[i].style.display = "none";
						}
					}
				}}
			/>
		</div>
	);
};

export default SearchBar;
