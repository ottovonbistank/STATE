import React, { useState } from "react";

const AddMovie = ({ onAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: ""
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...newMovie, rating: parseFloat(newMovie.rating) });
    setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={newMovie.title} onChange={handleChange} />
      <input name="description" placeholder="Description" value={newMovie.description} onChange={handleChange} />
      <input name="posterURL" placeholder="Poster URL" value={newMovie.posterURL} onChange={handleChange} />
      <input name="rating" placeholder="Rating" type="number" value={newMovie.rating} onChange={handleChange} />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovie;
