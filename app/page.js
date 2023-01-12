import { fetchAllCategories, fetchPopularMovies } from "../utils/fetch";
import FooterNavbar from "./components/footer-navbar/footer-navbar";
import MovieGallery from "./components/movie-gallery/movie-gallery";

export default async function Page(props) {
	const popularMovies = await fetchPopularMovies();
	const allCategories = await fetchAllCategories();
	const categoryForPaginationOnHome = allCategories.genres[0].id;
	return (
		<div>
			<MovieGallery movies={popularMovies} />
			<FooterNavbar
				base="category"
				path={categoryForPaginationOnHome}
				page={1}
			/>
		</div>
	);
}
