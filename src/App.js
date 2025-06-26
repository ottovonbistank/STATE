import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dreams.",
      posterURL: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
      rating: 4.8
    },
    {
      title: "Interstellar",
      description: "A team travels through a wormhole in space.",
      posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
      rating: 4.6
    }
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(0);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= rateFilter
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎬 Movie App</h1>
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        rateFilter={rateFilter}
        setRateFilter={setRateFilter}
      />
      <AddMovie onAdd={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;


