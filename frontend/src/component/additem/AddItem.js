import React, { useState } from 'react'
import './AddItem.css'
import { Token } from '@mui/icons-material';
import { userInfo } from '../services/dataStore';
import { useNavigate } from 'react-router-dom';
const AddItem = () => {
 const[productName, setProductName]  = useState('');
 const[productPrice, setProductPrice]  = useState('');
 const[productImage, setProductImage] = useState('');
 const[productDescription, setProductDescription] = useState('');
 const navigate = useNavigate();
  const addproduct= async(e)=>{
    e.preventDefault();
    if(productName == ''|| productPrice =='' || productImage==''||productDescription==''){
      console.log("All feilds are required");
      return;
    }
    try {
      const res = await fetch(`http://localhost:8080/additem`,
      {   headers:{
        'Content-Type':'application/json',
        "Authorization":"Token"+ userInfo.token
      },
        method:'POST',
        body:JSON.stringify({productName,productPrice,productImage,productDescription})
      }
      )
      console.log(res);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='absolute w-80 top-1/4 left-1/3 p-4 border-lg bg-white shadow-lg'>
      <form>
    <h2 className='text-center font-serief font-bold mb-4'>Add Your Product</h2>

      <div>
        <label for="productName" class="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
        <div class="mt-2">
          <input value={productName} onChange={(e)=>setProductName(e.target.value)} id="productName" name="ProductName" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
      <label for="productPrice" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
        <div class="mt-2">
          <input value={productPrice} onChange={(e)=>setProductPrice(e.target.value)} id="productPrice" name="productPrice" type="number" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
      <label for="productImage" class="block text-sm font-medium leading-6 text-gray-900">Image URL</label>
        <div class="mt-2">
          <input value={productImage} onChange={(e)=>setProductImage(e.target.value)}id="productImage" name="productImage" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
      <label for="productDescription" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
        <div class="mt-2">
          <textarea value={productDescription} onChange={(e)=>setProductDescription(e.target.value)} id="productDescription" name="productDescription" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      

      <button onClick={addproduct} className='flex w-full justify-center rounded-md bg-indigo-600 my-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >Add to Rent</button>

      </form>
    </div>
  )
}

export default AddItem