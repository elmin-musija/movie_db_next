"use client";
import styles from "./gallery-item.module.css";

import Link from "next/link";
import Image from "next/image";
import { uid } from "uid";

const GalleryItem = (props) => {
	return (
		<div key={uid()} className={styles.item}>
			<Link href={`/details/${props.pr_id}`}>
				{props.pr_image_src && (
					<Image
						src={`https://image.tmdb.org/t/p/w500${props.pr_image_src}`}
						alt={props.pr_title}
						height={200}
						width={200}
						priority
						className={styles.img}
					/>
				)}
			</Link>
			<div className={styles.movieInfo}>
				<p key={uid()} className={styles.title}>
					{props.pr_title}
				</p>
				<p key={uid()} className={styles.releaseDate}>
					{props.pr_release}
				</p>
				<p key={uid()} className={styles.description}>
					{props.pr_overview.slice(0, 175) || "no description available"} ...
				</p>
				<Link href={`/details/${props.pr_id}`} className={styles.readMore}>
					Read more ...
				</Link>
			</div>
		</div>
	);
};

export default GalleryItem;
