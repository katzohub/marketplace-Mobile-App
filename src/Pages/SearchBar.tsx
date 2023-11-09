import React, { useState } from "react";

type SearchBarProps = {
  onSearchTermChange: (searchTerm: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearchTermChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearchTermChange(e.target.value);
  };

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search Product"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
