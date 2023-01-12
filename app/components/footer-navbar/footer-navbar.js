"use client";

import Link from "next/link";
import React from "react";

export default function FooterNavbar(props) {
	const { base, path, currentPage, totalPages } = props;

	const nextPageHandler = () => {
		if (currentPage && currentPage < totalPages) {
			return `${base}/${path}/${Number(currentPage) + 1}`;
		} else {
			return `${base}/${path}/2`;
		}
	};

	const previousPageHandler = () => {
		if (currentPage > 1) {
			return `${base}/${path}/${Number(currentPage) - 1}`;
		} else {
			return `${base}/${path}`;
		}
	};

	return (
		<div>
			<Link href={previousPageHandler()}>Previous page</Link>
			<Link href="/">Home</Link>
			<Link href={nextPageHandler()}>Next page</Link>
		</div>
	);
}
