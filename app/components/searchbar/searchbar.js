"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./searchbar.module.css";

const SearchBar = (props) => {
	const inputRef = useRef();
	const router = useRouter();

	const onSubmitHandler = (event) => {
		event.preventDefault();
		router.push(`/search/${inputRef.current.value}`);
		inputRef.current.value = "";
	};

	return (
		<div className={styles.searchContainer}>
			<form onSubmit={onSubmitHandler} className={styles.form}>
				<input
					className={styles.inputField}
					type="text"
					name="input-search"
					id="input-search"
					placeholder="Search"
					ref={inputRef}
				/>
				{/* <input type="submit" className={styles.searchbtn} /> */}
				<img
					src="/search.svg"
					alt="Search Bar Icon"
					className={styles.searchIcon}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
