import Image from "next/image";
import { uid } from "uid";
import { fetchMovieByID } from "../../../utils/fetch";
import DetailsNavbar from "../../components/details-navbar/DetailsNavbar";
import styles from "./details.module.css";

export default async function Details(props) {
	const details = props.params.details;
	const movieItem = await fetchMovieByID(details);

	return (
		<div className={styles.details}>
			<Image
				src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
				alt={movieItem.title}
				width={233}
				height={350}
				priority
			/>
			<div>
				<h2>{movieItem.title}</h2>
				<p key={uid()}>{movieItem.tagline}</p>
				<p key={uid()}>{movieItem.overview}</p>
				<p key={uid()}>Released: {movieItem.release_date}</p>
				<DetailsNavbar />
			</div>
		</div>
	);
}
