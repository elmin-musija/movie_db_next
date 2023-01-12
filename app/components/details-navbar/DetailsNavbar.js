"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function DetailsNavbar() {
	const router = useRouter();

	const onClickHandler = () => {
		router.back();
	};

	return (
		<div>
			<button onClick={onClickHandler}>Back</button>
			<Link href="/">Home</Link>
		</div>
	);
}

export default DetailsNavbar;
