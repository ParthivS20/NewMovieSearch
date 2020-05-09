import React from "react";
import "../styles.css";
import SearchBar from "../components/SearchBar.js";

export default function TopBar(props) {
  return (
    <div className="sticky top-0 z-10">
      <div className="topBar h-48 w-full bg-green-600 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white">Movie Search</h1>
        <SearchBar
          searchText={props.searchText}
          setSearchText={props.setSearchText}
          searchEntered={props.searchEntered}
        />
      </div>
      <div className="h-2 w-full bg-blue-300 items-end" />
    </div>
  );
}
