import React from "react";
import SearchBar from "../searchbar/searchbar";
import CategorieButtons from "../category-buttons/category-buttons";

function Navbar() {
	return (
		<>
			<CategorieButtons />
			<SearchBar />
		</>
	);
}

export default Navbar;
