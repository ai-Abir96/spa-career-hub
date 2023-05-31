import React from 'react'
import './homepage.css'
import Banner from './Banner'
import JobCategory from './JobCategory'
import FeaturedJobs from './FeaturedJobs'
import { Outlet } from 'react-router-dom'
const Homepage = () => {
  return (
    <div className='homepage'>
      
        <Banner></Banner>
        <JobCategory></JobCategory>
        <FeaturedJobs></FeaturedJobs>
    </div>
  )
}

export default Homepage