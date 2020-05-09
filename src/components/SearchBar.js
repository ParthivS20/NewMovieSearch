import React from "react";
import "../styles.css";

export default function SearchBar(props) {
  return (
    <div className="justify-center">
      <form
        onSubmit={e => {
          e.preventDefault();
          props.searchEntered();
          props.setSearchText("");
        }}
      >
        <input
          className="searchBar font-bold h-10 rounded-full pl-4 mt-4 shadow-lg placeholder-green-600 outline-none"
          placeholder="Search for movies..."
          value={props.searchText}
          onChange={e => {
            props.setSearchText(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
