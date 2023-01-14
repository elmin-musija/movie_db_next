import Head from "./head";
import React from "react";
import "../styles/globals.css";
import styles from "./layout.module.css";
import Navbar from "./components/navbar/navbar";

function Layout({ children }) {
	return (
		<html lang="en">
			<Head />
			<body className={styles.body}>
				<Navbar />
				<div className={styles.container}>{children}</div>
			</body>
		</html>
	);
}

export default Layout;
