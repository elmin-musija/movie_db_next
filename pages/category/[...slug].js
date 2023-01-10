import Link from "next/link";
import { useRouter } from "next/router";
import { fetchMoviesByCategory } from "../../utils/fetch";
import MovieGallery from "../../components/movie-gallery/movie-gallery";

const CategoryPage = (props) => {
	const router = useRouter();

	const nextPageHandler = () => {
		const [category, page] = router.query.slug;
		const pageNumber = Number(page);
		return `/category/${category}/${pageNumber + 1}`;
	};

	const previousPageHandler = () => {
		const [category, page] = router.query.slug;
		const pageNumber = Number(page);
		if (pageNumber > 1) {
			return `/category/${category}/${pageNumber - 1}`;
		} else {
			return `/category/${category}`;
		}
	};

	return (
		<div>
			<MovieGallery movies={props.movieByCategoryPage} />
			<div className="flex gap-8 w-max mx-auto py-8">
				<Link
					className="text-center font-light text-slate-100 text-md p-1 m-1 rounded-xl min-w-max border-2 hover:bg-slate-200 hover:scale-105 hover:text-slate-800 active:scale-95 transition duration-150 ease-out"
					href={previousPageHandler()}
				>
					Previous page
				</Link>
				<Link
					className="text-center font-light text-slate-100 text-md p-1 m-1 rounded-xl min-w-max border-2 hover:bg-slate-200 hover:scale-105 hover:text-slate-800 active:scale-95 transition duration-150 ease-out"
					href="/"
				>
					Home
				</Link>
				<Link
					className="text-center font-light text-slate-100 text-md p-1 m-1 rounded-xl min-w-max border-2 hover:bg-slate-200 hover:scale-105 hover:text-slate-800 active:scale-95 transition duration-150 ease-out"
					href={nextPageHandler()}
				>
					Next page
				</Link>
			</div>
		</div>
	);
};

export default CategoryPage;

export async function getServerSideProps(context) {
	const [category, page] = context.query.slug;
	const movieByCategoryPage = await fetchMoviesByCategory(category, page);
	return { props: { movieByCategoryPage } };
}
