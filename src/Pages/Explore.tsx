import OneProduct from "./categoryPages/OneProduct";
import "./pagesStyle/Explore.css";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Explore = () => {
  const collectionNames = [
    "animals",
    "car",
    "children",
    "machine",
    "motocycle",
    "pc",
    "phone",
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
  };

  // Prípadná funkcia na určenie viditeľnosti kontajnera
  const containerVisibility = searchTerm ? "block" : "none";

  return (
    <div className="explore-container">
      <h2>Find Product</h2>
      <SearchBar onSearchTermChange={handleSearchChange} />

      <div
        className="search-top-container"
        style={{ display: containerVisibility, background: "black" }}
      >
        <OneProduct searchTerm={searchTerm} collectionName={collectionNames} />
      </div>
    </div>
  );
};

export default Explore;
