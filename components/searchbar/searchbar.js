import { useRef } from "react";
import { useRouter } from "next/router";

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
			<form
				className="flex justify-center items-center gap-4 w-max mx-auto pt-6"
				onSubmit={onSubmitHandler}
			>
				<input
					className="rounded-md pl-4 py-1"
					type="text"
					name="input-search"
					id="input-search"
					placeholder="search..."
					ref={inputRef}
				/>
				<input
					className="text-center font-light text-slate-100 text-md p-1 m-1 rounded-xl min-w-max border-2 hover:bg-slate-200 hover:scale-105 hover:text-slate-800 active:scale-95 transition duration-150 ease-out"
					type="submit"
					value="Search"
				/>
			</form>
		</div>
	);
};

export default SearchBar;
