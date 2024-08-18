import { getMovies } from "@/helpers/MovieFunctions";
import React from "react";
import HeroSection from "./components/HeroSection";
import MovieSection from "../profile/components/MovieSection";

const Movies = async () => {
	const movies = await getMovies("now_playing");
	// console.log(movies);
	return (
		<div>
			<HeroSection
				title={movies[0]?.title}
				overview={movies[0]?.overview}
				id={movies[0]?.id}
			/>
			<div>
				<MovieSection title="NOW PLAYING" type="now_playing" />
				<MovieSection title="POPULAR" type="popular" />
				<MovieSection title="TOP RATED" type="top_rated" />
				<MovieSection title="UPCOMING" type="upcoming" />
			</div>
		</div>
	);
};

export default Movies;
