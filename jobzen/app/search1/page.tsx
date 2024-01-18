"use client"
import React from 'react';

const Search1 = () => {
  return (
    <form className="flex flex-col md:flex-row gap-2 md:gap-4">
      <div className="flex relative">
        <div className="flex border-4 border-[#172554]">
          <input
            type="text"
            placeholder="Search for the tool you like"
            className="text-black w-full md:w-72 px-6 md:px-10 h-12 border-0 focus:outline-none"
          />
          <select
            id="searchingType"
            name="searchingType"
            title="Search..."
            className="h-12 border-0 focus:outline-none text-[#172554] font-bold px-3 md:px-4 py-1 tracking-wider bg-white"
          >
            <option value="job">JOB</option>
          </select>
        </div>
        <button
          type="submit"
          aria-label="Go"
          className="bg-[#172554] text-white w-22 h-14 md:w-24 md:h-12 hover:bg-bluefateh transition-all"
        >
          Go
        </button>
      </div>
    </form>
  );
};

export default Search1;
