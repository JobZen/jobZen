"use client"
import React from 'react';

const Search = () => {
  return (
    <form className="flex flex-col md:flex-row gap-1">
      <div className="flex relative">
        <div className="flex border-4 border-[#267296] rounded-full">
          <input
            type="text"
            placeholder="Search for the tool you like"
            className="text-black w-40 md:w-40 px-10 h-10 rounded-full border-0 focus:outline-none"
          />
          <select
            id="searchingType"
            name="searchingType"
            title="Search..."
            className="h-10 border-0 focus:outline-none text-[#267296] rounded-full font-bold px-2 md:px-3 py-0 md:py-1 tracking-wider bg-white"
          >
            <option value="job">Job</option>
            <option value="skill">Skill</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <button
          type="submit"
          aria-label="Go"
          className="bg-[#267296] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#254b5d]"
        >
          Go
        </button>
      </div>
    </form>
  );
};

export default Search;
