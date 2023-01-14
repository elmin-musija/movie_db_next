import React from "react";
import SearchBar from "../searchbar/searchbar";
import CategorieButtons from "../category-buttons/category-buttons";
import styles from "./navbar.module.css";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.container}>
				<div className={styles.headingContainer}>
					<p className={`${styles.heading} ${styles.heading1}`}>FILM</p>
					<p className={`${styles.heading} ${styles.heading2}`}>DATA</p>
					<p className={`${styles.heading} ${styles.heading3}`}>BASE</p>
				</div>
				<SearchBar />
				<button>Filter</button>
			</div>

			{/* <CategorieButtons /> */}
		</nav>
	);
}

export default Navbar;
