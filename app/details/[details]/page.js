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
				src={`https://image.tmdb.org/t/p/original${movieItem.backdrop_path}`}
				alt={movieItem.title}
				width={1200}
				height={500}
				priority
				className={styles.titleImg}
			/>

			<div className={styles.detailsInfo}>
				<h2>{movieItem.title}</h2>
				<p key={uid()} className={styles.tagline}>
					{movieItem.tagline}
				</p>
				<p key={uid()} className={styles.overview}>
					{movieItem.overview}
				</p>
				<p key={uid()} className={styles.rate}>
					{movieItem.vote_average.toFixed(1)} / 10 ⭐
				</p>
				<p key={uid()} className={styles.released}>
					Released: {movieItem.release_date}
				</p>
				<DetailsNavbar />
			</div>
		</div>
	);
}
