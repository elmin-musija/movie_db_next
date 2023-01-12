import Head from "./head";
import React from "react";
import styles from "./layout.module.css";
import Navbar from "./components/navbar/navbar";

function Layout({ children }) {
	return (
		<html className={styles.header} lang="en">
			<Head />
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}

export default Layout;
