import React, { useState, useEffect } from "react";
import "./App.css";
import Movie from "./Movie";
import Navbar from "./Navbar";
import List from "./List";

function App() {
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("dark");

  //state for other
  const [mov, setMov] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const submitting = (e) => {
    e.preventDefault();

    setQuery(search);
    setSearch("");
  };

  const collecting = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?t=${query}&apikey=133e6fdd`
      );
      const result = await response.json();
      setItem(result);

      //other hits
      const other = await fetch(
        `http://www.omdbapi.com/?s=${query}&apikey=133e6fdd`
      );
      const hits = await other.json();
      setMov(hits.Search);
      console.log(hits.Search);
    } catch (error) {
      console.log(`try again! you misspelled something ${error}`);
    }
  };

  useEffect(() => {
    collecting();
  }, [query]);

  return (
    <div className="App">
      <Navbar />

      <form onSubmit={submitting} className="search-box">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={handleChange}
          placeholder="enter movie title here.."
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>

      <Movie
        Poster={item.Poster}
        Title={item.Title}
        Released={item.Released}
        Actors={item.Actors}
        Director={item.Director}
        Genre={item.Genre}
        imdbRating={item.imdbRating}
        Plot={item.Plot}
      />

      <br />
      <h3 className="similar">Similar Named Hits For Your Search :-</h3>
      <div className="styled-row">
        {mov.map((images) => (
          <List
            key={images.imdbID}
            img={images.Poster}
            name={images.Title}
            year={images.Year}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
