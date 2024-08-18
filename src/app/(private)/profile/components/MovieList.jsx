"use client";
import React from "react";
import MovieCard from "./MovieCard";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const MovieList = ({ movies }) => {
	const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
	const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

	return (
		<div
			className="grid grid-flow-col gap-2 overflow-x-scroll "
			{...events}
			ref={ref}
		>
			{movies.map((movie) => (
				<MovieCard key={movie.id} {...movie} />
			))}
		</div>
	);
};

export default MovieList;
