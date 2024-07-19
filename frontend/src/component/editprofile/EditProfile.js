import React, { useState} from 'react'
import { userInfo } from '../services/dataStore';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const[name,setName] = useState('');
  const[profile,setProfile] = useState('');
  const[mobile,setMobile] = useState('');
  const[address, setAddress] = useState('');
  const navigate = useNavigate();

  const edit=async(e)=>{
    e.preventDefault();
    if (name==''||mobile==''||profile==''||address=='') {
      console.log("All fields are required");
      return;
    }
    try {
      const res = await fetch(`http://localhost:8080/editprofile`,
      {   headers:{
        'Content-Type':'application/json',
        "Authorization":"Token"+ userInfo.token
      },
        method:'POST',
        body:JSON.stringify({name,profile,address,mobile})
      }
      )
      console.log(res);
      navigate('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  return (

     

        <div className='absolute w-80 top-1/4 left-1/3 p-4 border-lg bg-white shadow-lg'>
          <form>
        <h2 className='text-center font-serief font-bold mb-4'>Edit Your profile</h2>
    
          <div>
            <label for="userName" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <div class="mt-2">
              <input value={name} onChange={(e)=>{setName(e.target.value)}}  id="userName" name="userName" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
    
          <div>
          <label for="mobileNo" class="block text-sm font-medium leading-6 text-gray-900">Mobile Number</label>
            <div class="mt-2">
              <input value={mobile} onChange={(e)=>{setMobile(e.target.value)}}  id="mobileNo" name="mobileNo" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
    
          <div>
          <label for="productImage" class="block text-sm font-medium leading-6 text-gray-900">Image URL</label>
            <div class="mt-2">
              <input value={profile} onChange={(e)=>{setProfile(e.target.value)}}  id="productImage" name="productImage" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
    
          <div>
          <label for="address" class="block text-sm font-medium leading-6 text-gray-900">Address</label>
            <div class="mt-2">
              <textarea value={address} onChange={(e)=>{setAddress(e.target.value)}}  id="address" name="address" type="text" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
    
          
    
          <button onClick={edit} className='flex w-full justify-center rounded-md bg-indigo-600 my-4 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >Edit</button>
    
          </form>
        </div>
      )
    }
    
    export default EditProfile