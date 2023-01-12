"use client";

import Link from "next/link";
import Image from "next/image";
import { uid } from "uid";

const GalleryItem = (props) => {
	return (
		<div key={uid()}>
			<Link href={`/details/${props.pr_id}`}>
				{props.pr_image_src && (
					<Image
						src={`https://image.tmdb.org/t/p/w500${props.pr_image_src}`}
						alt={props.pr_title}
						height={200}
						width={200}
						priority
					/>
				)}
			</Link>
			<p key={uid()}>{props.pr_title}</p>
			<p key={uid()}>{props.pr_release}</p>
			<p key={uid()}>
				{props.pr_overview.slice(0, 175) || "no description available"} ...
			</p>
		</div>
	);
};

export default GalleryItem;
