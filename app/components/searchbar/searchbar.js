"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

const SearchBar = (props) => {
	const inputRef = useRef();
	const router = useRouter();

	const onSubmitHandler = (event) => {
		event.preventDefault();
		router.push(`/search/${inputRef.current.value}`);
		inputRef.current.value = "";
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<input
					type="text"
					name="input-search"
					id="input-search"
					placeholder="search ..."
					ref={inputRef}
				/>
				<input type="submit" value="Search" />
			</form>
		</div>
	);
};

export default SearchBar;
