import { getMovies } from "@/helpers/MovieFunctions";
import React from "react";
import HeroSection from "./components/HeroSection";

const Movies = async () => {
	const movies = await getMovies("now_playing");
	// console.log(movies);
	return (
		<div>
			<HeroSection
				title={movies[0].title}
				overview={movies[0].overview}
				id={movies[0].id}
			/>
		</div>
	);
};

export default Movies;
