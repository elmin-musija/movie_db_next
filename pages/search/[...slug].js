import Link from "next/link";
import { useRouter } from "next/router";
import { fetchMoviesBySearch } from "../../utils/fetch";
import MovieGallery from "../../components/movie-gallery/movie-gallery";

const SearchPage = (props) => {
	const router = useRouter();
	const [searchString, page = 1] = router.query.slug;
	const pageNumber = Number(page);

	const nextPageHandler = () => {
		return `/search/${searchString}/${pageNumber + 1}`;
	};

	const previousPageHandler = () => {
		if (pageNumber > 1) {
			return `/search/${searchString}/${pageNumber - 1}`;
		} else {
			return "/";
		}
	};

	return (
		<div>
			<MovieGallery movies={props.movieBySearch} />
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

export default SearchPage;

export async function getServerSideProps(context) {
	const [searchString, page = 1] = context.query.slug;
	const movieBySearch = await fetchMoviesBySearch(searchString, page);
	if (
		"errors" in movieBySearch ||
		movieBySearch.page > movieBySearch.total_pages ||
		movieBySearch.results.length === 0
	) {
		return { redirect: { destination: "/", permanent: false } };
	}
	return { props: { movieBySearch } };
}
