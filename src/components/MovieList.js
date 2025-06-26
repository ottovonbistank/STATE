import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    {movies.map((movie, i) => (
      <MovieCard key={i} movie={movie} />
    ))}
  </div>
);

export default MovieList;
