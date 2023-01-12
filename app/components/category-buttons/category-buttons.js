import Link from "next/link";
import { uid } from "uid";
import { fetchAllCategories } from "../../../utils/fetch";

export default async function CategorieButtons() {
	const allCategories = await fetchAllCategories();
	return (
		<div>
			{allCategories.genres.map((category) => (
				<Link href={`/category/${category.id}`} key={uid()}>
					{category.name}
				</Link>
			))}
		</div>
	);
}
