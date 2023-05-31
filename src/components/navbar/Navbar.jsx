import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center navbar'>
        <h1 className='text-4xl font-extrabold'>Career Connect</h1>
        <div className='py-5 lg:py-0'>
            <Link to="/" className='mr-5'>Home</Link>
            <Link to="/statistics" className='mr-5'>Statistics</Link>
            <Link to="/applied-jobs" className='mr-5'>Applied Jobs</Link>
            <Link to="/blog" className='mr-5'>Blog</Link>
        </div>
        <button className='button'>Start Applying</button>
    </div>
  )
}

export default Navbar