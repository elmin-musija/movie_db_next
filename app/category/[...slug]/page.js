import { fetchMoviesByCategory } from "../../../utils/fetch";
import MovieGallery from "../../components/movie-gallery/movie-gallery";
import FooterNavbar from "../../components/footer-navbar/footer-navbar";

export default async function CategoryPage(props) {
	const [category, currentPage] = props.params.slug;
	const movieByCategoryAndPage = await fetchMoviesByCategory(
		category,
		currentPage
	);
	const totalPages = movieByCategoryAndPage.total_pages;
	return (
		<div>
			<MovieGallery movies={movieByCategoryAndPage} />
			<FooterNavbar
				base={"category"}
				path={category}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</div>
	);
}
