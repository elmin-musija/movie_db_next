import { fetchAllCategories, fetchMoviesByCategory } from "../../utils/fetch";
import MovieGallery from "../../components/movie-gallery/movie-gallery";
import CategorieButtons from "../../components/category-buttons/category-buttons";

export default function Category(props) {
	return (
		<div>
			<CategorieButtons categories={props.allCategories} />
			<MovieGallery movies={props.moviesByCategory} />
		</div>
	);
}

export async function getStaticPaths() {
	const allCategories = await fetchAllCategories();

	const params = allCategories.genres.map((element) => ({
		params: { categoryId: String(element.id) },
	}));

	return {
		paths: params,
		fallback: "blocking",
	};
}

export async function getStaticProps(context) {
	const allCategories = await fetchAllCategories();
	const moviesByCategory = await fetchMoviesByCategory(
		context.params.categoryId
	);
	return {
		props: { allCategories: allCategories, moviesByCategory: moviesByCategory },
	};
}
