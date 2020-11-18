import React from "react";
import "./Movie.css";

function Movie({
  Poster,
  Title,
  Released,
  Actors,
  Director,
  Language,
  Genre,
  imdbRating,
  Plot,
}) {
  return (
    <>
      <div className="movie__card">
        <div className="head">
          <img src={Poster} alt={Title} />
          <br />
          <p> Title : {Title}</p>
          <p>Released On : {Released}</p>
        </div>
        <div className="details">
          <p>Actors : {Actors}</p>
          <br />
          <p>Director : {Director}</p>
          <br />
          <p>Language : {Language}</p>
          <br />
          <p>Genre : {Genre}</p>
          <br />
          <p>IMDB Rating : {imdbRating}</p>
          <br />
          <p>
            Plot : <span className="plot-style">{Plot}</span>
          </p>
          <br />
        </div>
      </div>
    </>
  );
}

export default Movie;
