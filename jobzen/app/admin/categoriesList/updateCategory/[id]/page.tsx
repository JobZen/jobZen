'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SideNavBar from '../../../sideNavBar/page';
import { useRouter } from "next/navigation";
import { MdChevronLeft} from 'react-icons/md';
import Link from 'next/link'
import Popup from 'reactjs-popup'; 


interface Category {
  id: number;
  category: string;
  image: string;
}

const UpdateCategory = () => {
  const [catDetails, setcatDetails] = useState<Category | null>(null);
  const [catId,setCatId]=useState<Number>()
  const [category, setCategory] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  useEffect(() => {
    var currentUrl = window.location.href;
   

    var ind = currentUrl.split("/");
    var index = parseInt(ind[ind.length - 1]);
    
    setCatId(index);
const getOneCategory = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/jobCategory/jobCategory/${index}`
    );
    setcatDetails(response.data);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching category:", error);
  }
};
getOneCategory();
}, []);

const router = useRouter();
const handleUpdatedCat = async (event: any) => {
  event.preventDefault();
  const updateCat: any = {
    category: category ? category : catDetails?.category,
    image: url ? url : catDetails?.image,
  };
  console.log(updateCat);


  try {
    
    const update = await axios.put(
      `http://localhost:3000/jobCategory/jobCategory/${catId}`,
      updateCat
    );
    const data = update.data;
    console.log("Category updated successfully", data);
    router.push(`/admin/categoriesList`);
  } catch (error) {
    console.error("Error updating existing Category:", error);
  }
};

const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
  try {
    if (!e.target.files || !e.target.files[0]) return;
    let url = e.target.files[0];
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
            {url ? (
            <img
              className="w-20 h-20 rounded-full"
              src={url}
              alt="user image"
            />
            ) : (
              <img
              className="w-20 h-20 border-gray-900 rounded-full"
              src={catDetails?.image}
              alt="user image"
            />
            
            )}
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
            Updated Category Name
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
            {/* <button
          className="transition ease-in-out delay-150 text-green-500 bg-transparent border border-green-400 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 hover:font-bold hover:text-white duration-300 inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          onClick={handleUpdatedCat}
          >
          save the updates</button> */}
                 <Popup
    trigger={<button className="transition ease-in-out delay-150 text-green-500 bg-transparent border border-green-400 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 hover:font-bold hover:text-white duration-300 inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"> save the updates </button>}
    modal
    nested
  >
      {/* {close => (
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
                <p className="text-sm text-gray-500">Are you certain you wish to delete this account? All of this data's account will be permanently erased. This action is irreversible.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={() => handleDelete(freelancer.id)}>Delete</button>
          <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => {
              console.log('modal closed ');
              close();
            }} >Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div> )} */}

{close => (

<div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div
            className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div className="sm:flex sm:items-start">
                <div
                    className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Modal Title
                    </h3>
                    <div className="mt-2">
                        <p className="text-sm leading-5 text-gray-500">
                           Confirme your update on category
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <Link href="/admin/categoriesList"  >
                <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    
                      <button  onClick={handleUpdatedCat} type="button"
                        className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5"  >
                        Accept
                    </button>
                 
                </span>
                </Link>
                <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button  
                     onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                    type="button"
                   
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                        Cancel
                        
                    </button>
                </span>
            </div>
        </div>
    </div>
</div>
)}

      </Popup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</>

);
};
export default UpdateCategory;
