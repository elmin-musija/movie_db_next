import { fetchMoviesBySearch } from "../../../utils/fetch";
import FooterNavbar from "../../components/footer-navbar/footer-navbar";
import MovieGallery from "../../components/movie-gallery/movie-gallery";

export default async function SearchPage(props) {
	const [search, currentPage = 1] = props.params.slug;
	const moviesBySearch = await fetchMoviesBySearch(search, currentPage);
	const totalPages = moviesBySearch.total_pages;
	if (
		"errors" in moviesBySearch ||
		moviesBySearch.page > moviesBySearch.total_pages ||
		moviesBySearch.results.length === 0
	) {
		// return { redirect: { destination: "/", permanent: false } };
	}

	return (
		<div>
			<MovieGallery movies={moviesBySearch} />
			<FooterNavbar
				base="search"
				path={search}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</div>
	);
}
