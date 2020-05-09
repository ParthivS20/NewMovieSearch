import React from "react";
import "../styles.css";
import SmallMovieCard from "./SmallMovieCard.js";
import LargeMovieCard from "./LargeMovieCard";

export default function SmallMovieCardList(props) {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {props.movies.map((movie, index) => {
        return (
          <div>
            <SmallMovieCard movie={movie} />
            <LargeMovieCard movie={movie} />
          </div>
        );
      })}
    </div>
  );
}
