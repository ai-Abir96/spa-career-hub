import React from 'react'
import { Link } from 'react-router-dom';
import './viewjob.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

const ViewJobs = (props) => {
    const {id,company_logo,job_title,company_name,remote_or_onsite,fulltime_or_parttime,location,salary} =props.filterJob;
  return (
    <div className='viewjob'>
        <div className='flex items-center justify-between viewjobcontainer'>
            <div className='flex flex-row lg:justify-between items-center '>
                <div className='flex-none mr-10'><img src={company_logo} alt="" /></div>
                
                <div className='lg:grow lg:px-20 lg:text-left'>
                    <h2 className='text-xl lg:text-2xl'>{job_title}</h2>
                    <h3 className='lg:text-xl text-lg'>{company_name}</h3>
                    <div className='flex justify-start lg:justify-start items-start my-5'>
                        <div className='jobtype mr-2 lg:mr-8'>{remote_or_onsite}</div>
                        <div className='jobtype'>{fulltime_or_parttime}</div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-start items-start'>
                        <div className='lg:mr-10'><FontAwesomeIcon className='mr-2' icon={faLocationDot} />{location}</div>
                        <div ><FontAwesomeIcon className='mr-2' icon={faMoneyCheck} />{salary}</div>
                    </div>
                </div>
                    
            </div>
            <div className='lg:flex-none'>
                <Link to={`/jobs/${id}`}><button className='button'>View Details</button></Link>
            </div>
        </div>
    </div>
  )
}

export default ViewJobs