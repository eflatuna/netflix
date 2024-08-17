import Image from "next/image";
import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
	"https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieCard = ({ poster_path, vote_average, id }) => {
	return (
		<div className="w-40 h-[240] cursor-pointer relative">
			<Image
				height={240}
				width={160}
				src={poster_path ? IMG_API + poster_path : defaultImage}
				alt="movie-card"
			/>
			<span className="text-white absolute bottom-1 right-1 font-semibold">
				{vote_average.toFixed()}
			</span>
		</div>
	);
};

export default MovieCard;
