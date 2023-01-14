import React from "react";
import styles from "./filterBtn.module.css";

function FilterBtn() {
	return (
		<button className={styles.filterBtn}>
			<img src="/filter.svg" alt="Filter Icon" className={styles.filterIcon} />{" "}
			<p>Categories</p>
		</button>
	);
}

export default FilterBtn;
