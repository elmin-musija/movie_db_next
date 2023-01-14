import SearchBar from "../searchbar/searchbar";
import FilterBtn from "../filter-btn/filterBtn";
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

			<div className={styles.categoryArea}>
				<CategorieButtons />
			</div>
		</nav>
	);
}

export default Navbar;
