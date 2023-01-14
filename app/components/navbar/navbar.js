import React from "react";
import SearchBar from "../searchbar/searchbar";
import CategorieButtons from "../category-buttons/category-buttons";
import styles from "./navbar.module.css";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<p>Movie Database</p>
				<SearchBar />
				<button>Filter</button>
			</div>

			{/* <CategorieButtons /> */}
		</nav>
	);
}

export default Navbar;
