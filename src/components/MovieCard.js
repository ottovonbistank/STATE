import React from "react";

const MovieCard = ({ movie }) => (
  <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
    <img src={movie.posterURL} alt={movie.title} width="150" />
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
    <p>⭐ {movie.rating}</p>
  </div>
);

export default MovieCard;
