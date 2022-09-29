import React from "react";
import { directors } from "../data";

function Directors() {
  const eachDirector = directors.map((director) => (
    <div key={director.name}>
    <h4>Name: {director.name}</h4>
    <p>Movies</p>
    <ul>
    {director.movies.map((movie) => (
      <li key={movie}>{movie}</li>
    ))}
    </ul>
    </div>
  ))

  return (
  <div>
  <h1>Directors Page</h1>
  {eachDirector}
  </div>
  )
}

export default Directors;
