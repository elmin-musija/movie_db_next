import React from "react";
import Link from "next/link";
import styles from "./logo.module.css";

function Logo() {
	return (
		<div className={styles.headingContainer}>
			<Link href="/">
				<p className={`${styles.heading} ${styles.heading1}`}>FILM</p>
				<p className={`${styles.heading} ${styles.heading2}`}>DATA</p>
				<p className={`${styles.heading} ${styles.heading3}`}>BASE</p>
			</Link>
		</div>
	);
}

export default Logo;
