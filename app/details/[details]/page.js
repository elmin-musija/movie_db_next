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
			<div className={styles.imgContainer}>
				<Image
					src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
					alt={movieItem.title}
					width={233}
					height={350}
					priority
				/>
			</div>
			<div>
				<h2>{movieItem.title}</h2>
				<p key={uid()} className={styles.tagline}>
					{movieItem.tagline}
				</p>
				<p key={uid()} className={styles.overview}>
					{movieItem.overview}
				</p>
				<p key={uid()} className={styles.rate}>
					{movieItem.vote_average} / 5 ⭐
				</p>
				<p key={uid()} className={styles.released}>
					Released: {movieItem.release_date}
				</p>
				<DetailsNavbar />
			</div>
		</div>
	);
}
