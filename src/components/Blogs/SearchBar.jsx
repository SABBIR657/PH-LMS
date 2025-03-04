import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search Blog by Title"
        className="w-full py-4 px-10 bg-[#2B1B42] text-white rounded-xl outline-none placeholder-gray-400"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
