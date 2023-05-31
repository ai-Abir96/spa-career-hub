import React, { useEffect, useState } from 'react'
import JobDescription from '../jobdescription/JobDescription';
import { useLoaderData, useParams } from 'react-router-dom';

const FeaturedJobs = () => {
    // const [jobDetails,setJobDetails]  = useState([]);

    // useEffect(()=>{
    //     fetch('jobDescription.json')
    //     .then(res => res.json())
    //     .then(data => setJobDetails(data))
    // },[]
    // )
    const jobDetails = useLoaderData();

    const [numJobsToShow,setnumJobsToShow] = useState([4]);

    const subsetofJobs = jobDetails.slice(0,numJobsToShow);


  return (
    <div>
        <h1 style={{marginTop:120,marginBottom:120}} className='text-4xl text-center'>Featured Jobs</h1>
        <div className='grid lg:grid-cols-2 gap-5'>
            {
                subsetofJobs.map(jobDescription=>(<JobDescription key={jobDescription.id} jobDescription={jobDescription}></JobDescription>))
            }
        </div>

        <div className='flex justify-center items-center my-16'>
            <div  className='mr-7'>
                <button onClick={() => setnumJobsToShow(jobDetails.length - 2)} className='button'>View Less</button>
            </div>
            <div>
                <button onClick={() => setnumJobsToShow(jobDetails.length)} className='button'>Show All</button>
            </div>
        </div>
           
    </div>
  )
}

export default FeaturedJobs