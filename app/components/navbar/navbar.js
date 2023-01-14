import React from "react";
import SearchBar from "../searchbar/searchbar";
import CategorieButtons from "../category-buttons/category-buttons";
import styles from "./navbar.module.css";
import Logo from "../logo/logo";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<Logo />
				<SearchBar />
				<button>Filter</button>
			</div>

			{/* <CategorieButtons /> */}
		</nav>
	);
}

export default Navbar;
