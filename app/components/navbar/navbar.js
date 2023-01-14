import React from "react";
import SearchBar from "../searchbar/searchbar";
import FilterBtn from "../filter-btn/FilterBtn";
import CategorieButtons from "../category-buttons/category-buttons";
import styles from "./navbar.module.css";
import Logo from "../logo/logo";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<Logo />
				<SearchBar />
				<FilterBtn />
			</div>

			{/* <CategorieButtons /> */}
		</nav>
	);
}

export default Navbar;
