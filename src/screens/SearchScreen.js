import React, { useState } from "react";
import "../styles.css";
import TopBar from "../components/TopBar.js";
import SmallMovieCardList from "../components/SmallMovieCardList.js";

export default function SearchScreen(props) {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  function searchEntered() {
    var req = new XMLHttpRequest();
    req.open(
      "GET",
      "https://www.omdbapi.com/?apikey=3c1fa404&type=movie&s=" + searchText,
      true
    );
    req.send();
    req.onload = function() {
      var json = JSON.parse(req.responseText);
      if (json["Error"] != null) {
        alert(json["Error"]);
      } else {
        setMovies(json["Search"]);
      }
    };
  }

  return (
    <div>
      <TopBar
        searchText={searchText}
        setSearchText={setSearchText}
        searchEntered={searchEntered}
      />
      <SmallMovieCardList movies={movies} />
    </div>
  );
}
