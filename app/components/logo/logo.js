import React from "react";
import styles from "./logo.module.css";

function Logo() {
	return (
		<div className={styles.headingContainer}>
			<p className={`${styles.heading} ${styles.heading1}`}>FILM</p>
			<p className={`${styles.heading} ${styles.heading2}`}>DATA</p>
			<p className={`${styles.heading} ${styles.heading3}`}>BASE</p>
		</div>
	);
}

export default Logo;
