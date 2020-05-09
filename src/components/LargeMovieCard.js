import React, { useState } from "react";
import "../styles.css";

export default function LargeMovieCard(props) {
  const [detailInfo, setDetailInfo] = useState([]);
  extraInfo();
  return (
    <div id={props.movie["Title"] + props.movie["Year"]} className="invisible">
      <div
        className="fixed w-full h-full inset-0 bg-black cursor-pointer z-20 opacity-50"
        onClick={() => {
          document.getElementById(
            props.movie["Title"] + props.movie["Year"]
          ).style.visibility = "hidden";
        }}
      />

      <div className="largeMovieCard flex flex-col container shadow rounded-lg p-6 items-center fixed z-30">
        <div className="flex flex-row items-center">
          <div className="flex flex-col mr-10">
            <h1 className="text-2xl font-bold mb-2">{detailInfo["Title"]}</h1>
            <h2 className="text-sm text-gray-800">{detailInfo["Year"]}</h2>
            <h3 className="text-sm text-gray-600">
              <b>Director(s): </b>
              {detailInfo["Director"]}
            </h3>
          </div>
          <div className="flex flex-col">
            <img
              className="w-24 h-22 shadow"
              src={detailInfo["Poster"]}
              alt=""
            />
          </div>
        </div>

        <div>{renderRatings()}</div>

        <div className="flex flex-col mt-4 w-full">
          <h1 className="font-bold">Movie Introduction</h1>
          <h1 className="text-gray-700 mt-2">{detailInfo["Plot"]}</h1>
          <h1 className="font-bold mt-2">Actors</h1>
          <h1 className="text-gray-700 mt-2">{detailInfo["Actors"]}</h1>
          <h1 className="font-bold mt-2">Awards</h1>
          <h1 className="text-gray-700 mt-2">{detailInfo["Awards"]}</h1>
        </div>
      </div>
    </div>
  );

  function extraInfo() {
    var req = new XMLHttpRequest();
    req.open(
      "GET",
      "https://www.omdbapi.com/?apikey=3c1fa404&i=" + props.movie["imdbID"],
      true
    );
    req.send();
    req.onload = function() {
      var json = JSON.parse(req.responseText);
      setDetailInfo(json);
    };
  }

  function renderRatings() {
    const ratings = detailInfo["Ratings"];
    if (ratings !== undefined) {
      return (
        <div className="flex flex-row mt-4 w-full">
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-blue-500 text-center">
              {ratings[0] !== undefined ? ratings[0]["Source"] : <div />}
            </h1>
            <h2 className="text-center">
              {ratings[0] !== undefined ? ratings[0]["Value"] : <div />}
            </h2>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-blue-500 text-center">
              {ratings[1] !== undefined ? ratings[1]["Source"] : <div />}
            </h1>
            <h2 className="text-center">
              {ratings[1] !== undefined ? ratings[1]["Value"] : <div />}
            </h2>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center">
            <h1 className="text-blue-500 text-center">
              {ratings[2] !== undefined ? ratings[2]["Source"] : <div />}
            </h1>
            <h2 className="text-center">
              {ratings[2] !== undefined ? ratings[2]["Value"] : <div />}
            </h2>
          </div>
        </div>
      );
    }
  }
}
