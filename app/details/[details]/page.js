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
			<div className={styles.detailsHeader}>
				<Image
					src={`https://image.tmdb.org/t/p/original${movieItem.backdrop_path}`}
					alt={movieItem.title}
					width={800}
					height={300}
					priority
					className={styles.titleImg}
				/>
				<div className={styles.ratingContainer}>
					<img src="/star.svg" alt="star icon" className={styles.starIcon} />
					<p key={uid()} className={styles.rate}>
						<span className={styles.rateValue}>
							{movieItem.vote_average.toFixed(1)}
						</span>{" "}
						/ 10
					</p>
				</div>
			</div>

			<div className={styles.detailsInfo}>
				<h2>{movieItem.title}</h2>
				<p key={uid()} className={styles.tagline}>
					{movieItem.tagline}
				</p>
				<p key={uid()} className={styles.overview}>
					{movieItem.overview}
				</p>

				<p key={uid()} className={styles.released}>
					Released: {movieItem.release_date}
				</p>
				<DetailsNavbar />
			</div>
		</div>
	);
}
