"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideNavBar from '../sideNavBar/page';

interface Category{
  id:number,
  category:string,
  image:string,
}

const CategoriesList = () => {
const [categories, setCategories] = useState<Category[]>([])
const [categoriesCount,setcategoriesCount]=useState<number | undefined>()
const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

useEffect(()=>{  
const getAllCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3000/jobCategory/jobCategory");
    const fetchedCategories: Category[] = response.data;
    setCategories(fetchedCategories);
    setcategoriesCount(fetchedCategories.length);
  } catch (error) {
    console.error(error);
  }
};
getAllCategories()
},[])

const handleCheckboxChange = (categoryId: number) => {
  setSelectedCategories((prevSelectedCategories) => {
    if (prevSelectedCategories.includes(categoryId)) {
      return prevSelectedCategories.filter((id) => id !== categoryId);
    } else {
      return [...prevSelectedCategories, categoryId];
    }
  });
};
const handleDeleteCategories = async () => {
  for (const categoryId of selectedCategories) {
    await axios.delete(`http://localhost:3000/jobCategory/jobCategory/${categoryId}`);
  }
  setSelectedCategories([]);
    const response = await axios.get("http://localhost:3000/jobCategory/jobCategory");
    const updatedCategories: Category[] = response.data;
    setCategories(updatedCategories);
    alert('Categories deleted successfully!');
  };


return (
    <>
<div className="p-4 sm:ml-64">
<SideNavBar />
{/* First row with three columns */}
    <div className=" gap-4 mb-10 mt-10">
      <div className="flex flex-col items-center justify-center h-24 rounded">
        <p className="text-6xl text-black font-black">{categoriesCount || 0}</p>
        <p className="text-2xl text-black">Categories</p>
      </div>
    </div>

{/* drop navigation Action */}
    <div className="relative overflow-x-auto">
      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white">
        <label
          htmlFor="table-search"
          className="sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search-users"
            className="block pt-2 ps-10 text-sm border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
        </div>
      </div>

{/* table starts here */}
      <table className="w-full text-sm text-left rtl:text-right  border-[#267296] border-b-4 border-4 bg-[#267296]">
        <thead className="text-xs text-white border-[#267296] uppercase border-b-4">
          <tr>
            <th scope="col"className="p-4 bg-">
              <div className="flex items-center ">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checkbox-all-search"
                  className="sr-only ">
                  checkbox
                </label>
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-grey-500"
            >
             Category Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-grey-500"
            >
             Action
            </th>
          </tr>
        </thead>
        <tbody>
        {categories.map((category) => (
          <tr key={category.id} 
            className="bg-white border-gray-400 hover:bg-[#91C7EF] group"
          >
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="checkbox-table-search-1"
                  className="sr-only"
                >
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
            >
              <img
                className="w-20 h-20 rounded-full"
                src={category.image}
                alt="user image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold hover:text-bold">
                {category.category}
                </div>
              </div>
            </th>
            <td className="px-6 py-4">
              {/* <!-- Modal toggle --> */}
              <button
               onClick={handleDeleteCategories}
               disabled={selectedCategories.length === 0}
                className="font-medium hover:text-bold text-red-600 text-xl hover:underline hover:font-extrabold"
              >
                Delete Selected Categories
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</>

);
};

export default CategoriesList