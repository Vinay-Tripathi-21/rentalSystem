import React from 'react'
import { Link } from 'react-router-dom'

const dropdown = () => {
  return (
    <div class ="relative">
        <div className='absolute  mt-4 w-20 rounded-xl bg-white text-black z-10 shadow-lg right-1/4  '>
            <div className='p-2 w-100 text-center text-sm border-b'><Link to="/profile">Profile</Link></div>
            <div className='p-2 w-100 text-center text-sm border-b'><Link to="/additem" >Add Item</Link></div>
            <div className='p-2 w-100 text-center text-sm border-b'><Link to="/signin" >Logout</Link></div>
        </div>
    </div>
  )
}

export default dropdown