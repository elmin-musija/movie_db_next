import Link from "next/link";
import { useRouter } from "next/router";
import { fetchAllCategories, fetchMoviesByCategory } from "../../utils/fetch";
import MovieGallery from "../../components/movie-gallery/movie-gallery";
import CategorieButtons from "../../components/category-buttons/category-buttons";

export default function Category(props) {
	const router = useRouter();
	return (
		<div>
			<CategorieButtons categories={props.allCategories} />
			<MovieGallery movies={props.moviesByCategory} />
			<div className="w-max mx-auto py-8">
				<Link
					className="text-center font-light text-slate-100 text-md p-1 m-1 rounded-xl min-w-max border-2 hover:bg-slate-200 hover:scale-105 hover:text-slate-800 active:scale-95 transition duration-150 ease-out"
					href={`${router.asPath}/2`}
				>
					Explore more
				</Link>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const allCategories = await fetchAllCategories();

	const params = allCategories.genres.map((category) => ({
		params: { categoryId: String(category.id) },
	}));

	return {
		paths: params,
		fallback: "blocking",
	};
}

export async function getStaticProps(context) {
	const categoryId = context.params.categoryId;
	const allCategories = await fetchAllCategories();
	const moviesByCategory = await fetchMoviesByCategory(categoryId);
	return {
		props: { allCategories: allCategories, moviesByCategory: moviesByCategory },
	};
}
