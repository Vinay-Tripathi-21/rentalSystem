import React, { useRef, useState, useEffect } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
  
  const[name,setName]= useState('');
  const[email,setEmail]= useState('');
  const[password,setPassword]= useState('');
  const[conPassword,setConPassword]= useState('');
  const[role,setRole]= useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    console.log(email,name,password);
   e.preventDefault();
    if (name== ''|| email==''|| password=='' ) {
      console.log("All fields are required");
    }else if(password !== conPassword){
      console.log("Password and Confirm Password should be same");
    }
    else{
      console.log(name, email, password);
    }
    try{
      const res = await fetch(`http://localhost:8080/user/register`,
        {
          headers:{
            'Content-Type':'application/json'
          },
          method: 'POST',
        body: JSON.stringify({name,email,password,role})}
      );
      if (res.status==200) {
        navigate('/signin');
      }
    }
     catch(err){
      console.log(err);
    }
  }


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

    {/* Username */}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" >
            <div>
              <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                  id="Name"
                  name="Name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
           


    {/* email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Password */}

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

                    {/* Confirmm password */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="conpassword" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={conPassword}
                  onChange={(e)=>setConPassword(e.target.value)}
                  id="conpassword"
                  name="conpassword"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <div className="flex items-center ">
                <label htmlFor="Role" className="block text-sm font-medium leading-6 text-gray-900">
                 Are you a seller?
                </label>
              </div>
              <div className="mt-2 mr-2 flex justify-start">
                <input
                value={'buyer'}
                onChange={(e)=>setRole(e.target.value)}
                  name="Role"
                  type="radio"
                  //value={''}
                  required
                  className="block mr-2 rounded-md border-0 py-1 text-gray-900 "
                /> NO
                <input
                  name="Role"
                  type="radio"
                  value={'User'}
                  onChange={(e)=>setRole(e.target.value)}
                  required
                  className="block  rounded-md border-0 py-1 text-gray-900 "
                />YES
              </div>
            </div>


            <div>
              <button
              onClick={handleSubmit}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Your Accouunt
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already a member?{' '}
            <Link to="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login into your Account
            </Link>
          </p> 
        </div>
      </div>
      </>
  )
}



export default SignUp