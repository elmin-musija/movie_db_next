import Link from "next/link";
import { uid } from "uid";

const CategorieButtons = (props) => {
	const { categories } = props;
	return (
		<div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 xl:grid-cols-10 gap-1 py-8">
			{categories.genres.map((category) => (
				<Link
					href={`/category/${category.id}`}
					key={uid()}
					className="text-center font-light text-slate-100 text-md p-1 m-1 rounded-xl min-w-max border-2 hover:bg-slate-200 hover:scale-105 hover:text-slate-800 active:scale-95 transition duration-150 ease-out"
				>
					{category.name}
				</Link>
			))}
		</div>
	);
};

export default CategorieButtons;
