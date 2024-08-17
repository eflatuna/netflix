import { getMovies } from "@/helpers/MovieFunctions";
import React from "react";
import MovieList from "./MovieList";

const MovieSection = async ({ title, type }) => {
	const movies = await getMovies(type);
	return (
		<div>
			<p>{title}</p>
			<MovieList movies={movies} />
		</div>
	);
};

export default MovieSection;
