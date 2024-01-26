"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideNavBar from '../sideNavBar/page';
import Search from '../../search/page'
import Popup from 'reactjs-popup'; 
import Link from 'next/link';

interface Category{
  id:number,
  category:string,
  image:string,
}

const CategoriesList = () => {
const [categories, setCategories] = useState<Category[]>([])
const [categoriesCount,setcategoriesCount]=useState<number | undefined>()
const [refresh,setRefresh]=useState<boolean>(false)
const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
const [newCategory,setNewCategory]=useState<Category>({
  id:0,
  category:"",
  image:"",
})
const [showAddForm, setShowAddForm] = useState(false);

const handleDelete = async (id: number) => {
  try {
    await axios.delete(`http://localhost:3000/jobCategory/jobCategory/${id}`);
    setRefresh(!refresh)

  } catch (error) {
    console.error('Error deleting freelancer:', error);
  }

};


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
},[refresh])

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
        <Search/>
        <Link href={`/admin/categoriesList/createCategory`}>
        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-white hover:border-solid hover:bg-[#065F46] hover:text-white group flex-shrink-0 w-full md:w-auto min-w-[8rem] flex items-center justify-center rounded-md border-2 border-[#065F46] text-sm leading-6 text-[#065F46] font-medium py-3 px-4">
        <svg className="group-hover:text-white mb-1 text-[#065F46] font-semibold" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
      </svg>New Category</button></Link>
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
        {categories.map((category) => (
          <tr key={category.id} 
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
              <Popup
    trigger={<button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center text-red-700 hover:text-white border border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"> Delete category </button>}
    modal
    nested
  >
      {close => (
     <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

   

  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      
       
      
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Delete account</h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Are you certain you wish to delete your account? All of your data will be permanently erased. This action is irreversible.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={() => handleDelete(category.id)}>Delete</button>
          <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => {
              console.log('modal closed ');
              close();
            }} >Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div> )}
      </Popup>
            <Link href={`/admin/categoriesList/updateCategory/${category.id}`}>
              <button
            className="transition ease-in-out delay-150 text-white bg-blue-500 border border-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            Update category</button>
          </Link>
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