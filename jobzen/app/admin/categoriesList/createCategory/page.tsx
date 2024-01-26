'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideNavBar from '../../sideNavBar/page';
import { MdChevronLeft} from 'react-icons/md';
import Link from 'next/link'


interface Category {
  id: number;
  category: string;
  image: string;
}

const CreateCategory = () => {
  const [url, setUrl] = useState<string>("");
  const [catId,setCatId]=useState<Number>()
  const [category, setCategory] = useState<string>("");
  

const handleCreateCategory = async (event: any) => {
  event.preventDefault();
  const createCat: any = {
    category: category,
    image: url,
  };
  try {
    const create = await axios.post(
      "http://localhost:3000/jobCategory/jobCategory",
      createCat
    );
    const data = create.data;
    console.log("Category created successfully", data);
  } catch (error) {
    console.error("Error creating new Category:", error);
  }
};

const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
  try {
    if (!e.target.files || !e.target.files[0]) return;
    let url = e.target.files[0];setUrl
    if (!url) return;

    const formData = new FormData();
    formData.append("file", url);
    formData.append("upload_preset", "project");
    formData.append("cloud_name", "ds3tmq5iw");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/ds3tmq5iw/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const responseData = await response.json();
    setUrl(responseData.secure_url);
    console.log("url", responseData.secure_url);
    
    
  } catch (err) {
    console.error(err);
  }
};


return (
<>
<div className="p-4 sm:ml-64">
<SideNavBar />
{/* First row with three columns */}
    <div className=" gap-4 mb-10 mt-10">
      <div className="flex flex-col items-center justify-center h-24 rounded">
        <p className="text-6xl text-black font-black"></p>
        <p className="text-2xl text-black"></p>
      </div>
    </div>

{/* drop navigation Action */}
    <div className="">
    <div className="flex gap-4 mt-4 md:space-y-0 py-4 bg-white">
        <Link href="/admin/categoriesList">  
    <button
    className="flex transition ease-in-out delay-150 text-gray-700 bg-gray-200 border rounded-full border-gray-700  hover:scale-110 hover:bg-gray-300 hover:font-bold hover:text-black font-medium rounded-l text-sm px-5 py-2.5 me-2 mb-2 ml-6"
  >
    <MdChevronLeft className="transition ease-in-out delay-100 text-2xl mr-8 text-gray-700 bg-gray-200 border-gray-700  hover:scale-110 hover:bg-gray-300 hover:font-bold hover:text-black font-bold"/>
    Back to categories list
  </button></Link>

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
            className="px-6 py-3 bg-grey-500 "
          >
           Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          className="bg-white border-gray-400 hover:bg-[#91C7EF] group transition duration-200 "
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
              className="w-20 h-20 border-gray-900 rounded-full"
              src={url}
              alt=""
            />
             <div
                      onClick={() =>
                        document.getElementById("photoInput")?.click()
                      }
                      >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6"
             onClick={() => uploadImage}
            >
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>
<input
                        id="photoInput"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => uploadImage(e)}
                      />
      </div>
            <div className="ps-3">
            <div className="mb-6">
            <label htmlFor="New category's name" className="text-gray-700 text-sm font-semibold">
            New category's name
            </label>
            <input
                type="text"
                id="New category's name"
                placeholder="Enter category name"
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
                </div>
              </div>
              
              <div className="mb-6">
            </div>
          </th>
          <td className="px-6 py-4">
            {/* <!-- Modal toggle --> */}
           
            <button
          className="transition ease-in-out delay-150 text-green-500 bg-transparent border border-green-400 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 hover:font-bold hover:text-white duration-300 inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          onClick={(e)=>handleCreateCategory(e)}>
          Add to list</button>
         
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</>

);
};
export default CreateCategory;
