import {
	fetchAllCategories,
	fetchMoviesByCategory,
} from "../../../utils/fetch";
import MovieGallery from "../../components/movie-gallery/movie-gallery";
import FooterNavbar from "../../components/footer-navbar/footer-navbar";

export default async function CategoryId(props) {
	const { categoryId } = props.params;
	const moviesByCategory = await fetchMoviesByCategory(categoryId);
	const totalPages = moviesByCategory.total_pages;
	return (
		<div>
			<MovieGallery movies={moviesByCategory} />
			<FooterNavbar
				base="category"
				path={categoryId}
				currentPage={1}
				totalPages={totalPages}
			/>
		</div>
	);
}

export async function generateStaticParams() {
	const allCategories = await fetchAllCategories();
	return allCategories.genres.map((category) => ({
		categoryId: category.id.toString(),
	}));
}
