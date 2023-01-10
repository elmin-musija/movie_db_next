import { uid } from "uid";
import GalleryItem from "../gallery-item/gallery-item";

const MovieGallery = (props) => {
	const { movies } = props;
	return (
		<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-12">
			{movies.results.map((movie) => (
				<GalleryItem
					key={uid()}
					pr_id={movie.id}
					pr_image_src={movie.poster_path}
					pr_title={movie.title}
					pr_overview={movie.overview}
					pr_release={movie.release_date}
				/>
			))}
		</div>
	);
};

export default MovieGallery;
