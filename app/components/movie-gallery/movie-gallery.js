import { uid } from "uid";

import GalleryItem from "../gallery-item/gallery-item";

const MovieGallery = (props) => {
	const { movies } = props;

	return (
		<div>
			{movies.results?.map((movie) => {
				if (movie.poster_path || movie.backdrop_path) {
					return (
						<GalleryItem
							key={uid()}
							pr_id={movie.id}
							pr_image_src={movie.poster_path || movie.backdrop_path}
							pr_title={movie.title}
							pr_overview={movie.overview}
							pr_release={movie.release_date}
						/>
					);
				}
			})}
		</div>
	);
};

export default MovieGallery;
