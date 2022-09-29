import React from "react";
import { movies } from "../data";

function Movies() {
  const eachMovie = movies.map((movie) => (
    <div key={movie.title}>
    <h4>Name: {movie.title}</h4>
    <p>Time: {movie.time}</p>
    <p>Genres:</p>
    <ul>
    {movie.genres.map((genre) => (
      <li key={genre}>{genre}</li>
    ))}
    </ul>
    </div>
  ))

  return(
  <div>
  <h1>Movies Page</h1>
  {eachMovie}
  </div>)
}

export default Movies;
