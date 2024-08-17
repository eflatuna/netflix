import { getMovies } from "@/helpers/MovieFunctions";
import React from "react";
import MovieList from "./MovieList";

const MovieSection = async ({ title, type }) => {
	const movies = await getMovies(type);
	return (
		<div className="mb-4 ">
			<p className="text-white text-ms lg:text-2xl font-semibold mb-4">
				{title}
			</p>
			<MovieList movies={movies} />
		</div>
	);
};

export default MovieSection;
