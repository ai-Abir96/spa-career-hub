import React from 'react'
import './homepage.css'
import Homepageimage from '/assets/Images/jobs.jpg'
const Banner = () => {
  return (
    <div>
        <div className='lg:flex lg:justify-between justify-center items-center lg:mr-10'>
            <div className='flex flex-col'>
                <h1 className='text-5xl lg:text-7xl text-center lg:text-left'>One Step<br/>
                Closer To Your<br/>
            <span className="text-heading">Dream Job</span></h1>
            <p className='pt-6 lg:pr-10 text-justify'>Career Connect is a website or platform that 
                connects job seekers with potential employers. 
                It provides resources and tools for job seekers 
                to search and apply for job openings, build their 
                resumes and cover letters, and prepare for interviews. 
                </p>

                <button className='button mt-10'>Get Started</button>
            </div>
            
        <div>
            <img src={Homepageimage} alt="" />
        </div>
    </div>
    </div>
  )
}

export default Banner