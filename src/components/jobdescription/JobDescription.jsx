import React from 'react'
import './jobdescription.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

const JobDescription = (props) => {
    const {id,company_logo,company_name,job_title,remote_or_onsite,salary,location,fulltime_or_parttime} = props.jobDescription;
  return (
    <div className='jobdescription flex flex-col items-center lg:items-start'>
        <img src={company_logo} alt="" />

        <h2 className='text-2xl my-5'>{job_title}</h2>
        <h3 className='text-xl'>{company_name}</h3>
        <div className='flex justify-start items-center my-5'>
            <div className='jobtype mr-8'>{remote_or_onsite}</div>
            <div className='jobtype'>{fulltime_or_parttime}</div>
        </div>
        <div className='lg:flex  items-center'>
            <div className='lg:mr-16'><FontAwesomeIcon className='mr-2' icon={faLocationDot} />{location}</div>
            <div><FontAwesomeIcon className='mr-2' icon={faMoneyCheck} />{salary}</div>
        </div>
        <Link to={`/jobs/${id}`}><button className='button mt-8'>View Details</button></Link>
    </div>
  )
}

export default JobDescription