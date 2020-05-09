import React from "react";
import "../styles.css";

export default function SmallMovieCard(props) {
  return (
    <div>
      <div
        className="smallMovieCard container flex flex-row items-center shadow-md p-5 hover:shadow-lg cursor-pointer rounded-lg m-5 responsive bg-white outline-none z-0"
        onClick={() => {
          document.getElementById(
            props.movie["Title"] + props.movie["Year"]
          ).style.visibility = "visible";
          document.getElementById(
            props.movie["Title"] + props.movie["Year"]+"l"
          ).style.top = "50%";
        }}
      >
        <div className="flex flex-col mr-10 divide-y divide-gray-500">
          <h1 className="text-2xl font-bold mb-1">{props.movie["Title"]}</h1>
          <h2 className="text-gray-600 mt-5">{props.movie["Year"]}</h2>
        </div>
        <div className="flex flex-col">
          <img
            className="w-24 h-22 rounded-lg border-4 border-gray-400"
            src={props.movie["Poster"]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
