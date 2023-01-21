import Image from "next/image";
import { uid } from "uid";
import { fetchMovieByID } from "../../../utils/fetch";
import DetailsNavbar from "../../components/details-navbar/DetailsNavbar";
import styles from "./details.module.css";

export default async function Details(props) {
	const details = props.params.details;
	const movieItem = await fetchMovieByID(details);

	const readableDate = new Date(movieItem.release_date).toLocaleDateString(
		"en-US",
		{
			day: "numeric",
			month: "long",
			year: "numeric",
		}
	);

	console.log(movieItem);

	return (
		<div className={styles.details}>
			<div className={styles.detailsHeader}>
				{movieItem.backdrop_path !== null && (
					<Image
						src={`https://image.tmdb.org/t/p/original${movieItem.backdrop_path}`}
						alt={movieItem.title}
						width={800}
						height={300}
						priority
						className={styles.titleImg}
					/>
				)}
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

				<h3>Categories</h3>
				<div className={styles.genreContainer}>
					{movieItem.genres.map((genre) => (
						<p className={styles.genre} key={uid()}>
							{genre.name}
						</p>
					))}
				</div>
				<h3>Overview</h3>
				<p key={uid()} className={styles.overview}>
					{movieItem.overview}
				</p>

				<h3>Details</h3>
				<div className={styles.detailsContainer}>
					{movieItem.runtime !== 0 && <p>Runtime: {movieItem.runtime} min</p>}
					{movieItem.spoken_languages.length !== 0 && (
						<div className={styles.langContainer}>
							<p>Languages:</p>
							{movieItem.spoken_languages.map((spoken_languages) => (
								<p className={styles.language} key={uid()}>
									{spoken_languages.english_name}
								</p>
							))}
						</div>
					)}
					{movieItem.homepage !== "" && (
						<a href={movieItem.homepage} target="_blank">
							Official website &raquo;
						</a>
					)}
				</div>

				<h3>Status</h3>
				<p key={uid()} className={styles.released}>
					{movieItem.status} / {readableDate}
				</p>

				<DetailsNavbar />
			</div>
		</div>
	);
}
