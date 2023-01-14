import Link from "next/link";
import { uid } from "uid";
import { fetchAllCategories } from "../../../utils/fetch";
import styles from "./category-buttons.module.css";

export default async function CategorieButtons() {
	const allCategories = await fetchAllCategories();
	return (
		<div className={styles.btnContainer}>
			{allCategories.genres.map((category) => (
				<Link
					href={`/category/${category.id}`}
					key={uid()}
					className={styles.catBtn}
				>
					{category.name}
				</Link>
			))}
		</div>
	);
}
