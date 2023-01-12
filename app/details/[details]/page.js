import Image from "next/image";
import { uid } from "uid";
import { fetchMovieByID } from "../../../utils/fetch";
import DetailsNavbar from "../../components/details-navbar/DetailsNavbar";

export default async function Details(props) {
	const details = props.params.details;
	const movieItem = await fetchMovieByID(details);

	return (
		<div>
			<Image
				src={`https://image.tmdb.org/t/p/w500${movieItem.poster_path}`}
				alt={movieItem.title}
				width={350}
				height={350}
				priority
			/>
			<h1>{movieItem.title}</h1>
			<p key={uid()}>{movieItem.tagline}</p>
			<p key={uid()}>{movieItem.overview}</p>
			<p key={uid()}>{movieItem.release_date}</p>
			<DetailsNavbar />
		</div>
	);
}
