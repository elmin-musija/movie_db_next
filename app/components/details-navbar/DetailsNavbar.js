"use client";
import styles from "./details-navbar.module.css";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function DetailsNavbar() {
	const router = useRouter();

	const onClickHandler = () => {
		router.back();
	};

	return (
		<div className={styles.navbar}>
			<button onClick={onClickHandler}>&laquo; Back</button>
			<Link href="/">Home</Link>
		</div>
	);
}

export default DetailsNavbar;
