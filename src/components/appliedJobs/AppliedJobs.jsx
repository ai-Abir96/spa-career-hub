import React, { useEffect, useState } from 'react'
import ViewJobs from './ViewJobs';
import './viewjob.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AppliedJobs = () => {
  const [jobs,setJobs] = useState([]);
  const [fiteredJobs,setFilteredJobs] = useState([]);

  useEffect(()=>{
    const getjobsinlocal = JSON.parse(localStorage.getItem("jobs")) || [];
    if(getjobsinlocal){
      setJobs(getjobsinlocal);
      setFilteredJobs(getjobsinlocal);
    }
  },[])
  
  const fiterJobs = (jobCategory) =>{
    if(jobCategory ==="all"){
      setFilteredJobs(jobs);
    }
    else{
      const fiteredJobs = jobs.filter((job)=>job.remote_or_onsite === jobCategory);
      setFilteredJobs(fiteredJobs);
    }
  }


  return (
    <div className='appliedjob'>
      <div className='heading'><h1 className='text-5xl text-center'>Applied Jobs</h1></div>
      <div className='flex justify-end'>
        <h1 className='text-2xl mr-5 pt-2'>Filter By</h1>
      <button onClick={()=>fiterJobs("Remote")} className='mr-5'>Remote Jobs</button>
      <button onClick={()=>fiterJobs("Onsite")} className='mr-5'>Onsite Jobs</button>
      <button onClick={()=>fiterJobs("all")}>View All</button>
      </div>
      {fiteredJobs.map(filterJob=>(<ViewJobs key={filterJob.id} filterJob={filterJob}></ViewJobs>))}
    </div>
  )
}

export default AppliedJobs