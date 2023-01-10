import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { uid } from "uid";
import { fetchMovieByID } from "../../utils/fetch";

const Details = (props) => {
	const router = useRouter();

	const onClickHandler = () => {
		router.back();
	};

	return (
		<div className="flex flex-col justify-center items-center text-slate-50">
			<Image
				className="my-8 rounded-3xl w-auto"
				src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
				alt={props.movie.title}
				width={350}
				height={350}
				priority
			/>
			<h1 className="font-bold mb-3 text-4xl">{props.movie.title}</h1>
			<p className="font-bold text-xl mb-3" key={uid()}>
				{props.movie.tagline}
			</p>
			<p className="text-justify w-1/2" key={uid()}>
				{props.movie.overview}
			</p>
			<p key={uid()}>{props.movie.release_date}</p>
			<div className="flex gap-8 w-max mx-auto py-8">
				<button
					className="text-center font-light py-1 px-6 my-6 text-slate-100 text-md p-1 m-1 rounded-xl border-2 hover:bg-slate-200 hover:scale-105 hover:text-slate-800 active:scale-95 transition duration-150 ease-out"
					onClick={onClickHandler}
				>
					Back
				</button>
				<Link
					className="text-center font-light py-1 px-6 my-6 text-slate-100 text-md p-1 m-1 rounded-xl border-2 hover:bg-slate-200 hover:scale-105 hover:text-slate-800 active:scale-95 transition duration-150 ease-out"
					href="/"
				>
					Home
				</Link>
			</div>
		</div>
	);
};

export default Details;

export async function getServerSideProps(context) {
	const details = context.query.details;
	const singleMovie = await fetchMovieByID(details);
	return { props: { movie: singleMovie } };
}
