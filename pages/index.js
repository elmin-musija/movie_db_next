import { fetchPopularMovies, fetchAllCategories } from "../utils/fetch";
import CategorieButtons from "../components/category-buttons/category-buttons";
import MovieGallery from "../components/movie-gallery/movie-gallery";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
	const { popularMovies, allCategories } = props;
	return (
		<div>
			<CategorieButtons categories={allCategories} />
			<MovieGallery movies={popularMovies} />
		</div>
	);
}

export async function getStaticProps() {
	const popularMovies = await fetchPopularMovies();
	const allCategories = await fetchAllCategories();
	return {
		props: { popularMovies: popularMovies, allCategories: allCategories },
		revalidate: 600,
	};
}
