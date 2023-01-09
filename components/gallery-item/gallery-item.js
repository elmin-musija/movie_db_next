import { uid } from "uid";
import Link from "next/link";
import Image from "next/image";

const GalleryItem = (props) => {
	return (
		<div
			key={uid()}
			className="flex flex-col gap-4 justify-between items-center h-max cursor-pointer text-slate-100"
		>
			<Link href={`/details/${props.pr_id}`}>
				<Image
					className="rounded-xl hover:scale-105 tranform duration-150 ease-out hover:shadow-xl hover:shadow-slate-700 mb-2"
					src={`https://image.tmdb.org/t/p/w500${props.pr_image_src}`}
					height={200}
					width={200}
					priority
					alt={props.pr_title}
				/>
			</Link>
			<p
				className="text-center font-bold mb-1 h-14 hover:scale-105 transition duration-150 ease-out"
				key={uid()}
			>
				{props.pr_title}
			</p>
			<p
				className="font-light text-sm hover:scale-105 transition duration-150 ease-out"
				key={uid()}
			>
				{props.pr_release}
			</p>
			<p
				className="font-light text-slate-400 text-sm hover:scale-105 transition duration-150 ease-out text-justify"
				key={uid()}
			>
				{props.pr_overview.slice(0, 175)}...
			</p>
		</div>
	);
};

export default GalleryItem;
