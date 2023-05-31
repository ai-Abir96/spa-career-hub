import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import './jobdetails.css'
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


const JobDetails = () => {
  const jobDetails = useLoaderData();
  const {id,company_logo,job_title,company_name,remote_or_onsite,
    location,fulltime_or_parttime,salary,job_description,job_responsibility,
    educational_requirements,experiences,contact_information} = jobDetails;
  
  const handleClick = (jobDetails) =>{
    const existingLocalJobs = JSON.parse(localStorage.getItem("jobs")) || [];

    const isDuplicate = existingLocalJobs.some(localjob => localjob.id === jobDetails.id);
    
    if (isDuplicate) {
      Swal.fire({
        icon:'waring',
        title:"You Have already Applied for the Job!! Keep hunting !!!"
      });
      return;
    }
    
    const updatedLocalJobs = [...existingLocalJobs,jobDetails]
    localStorage.setItem("jobs",JSON.stringify(updatedLocalJobs));
    Swal.fire({
      icon:'success',
      title:"Successfully Appiled"
    });
  }
  
    return (
    <div className='jobdetails'>
        <h1 className='text-5xl text-center'>Job Details</h1>
        <div className='grid lg:grid-cols-3 gap-9 description'>
          <div className='lg:mr-20 lg:col-span-2 jdes-container'>
            <div>
              <p> <span className='font-extrabold'>Job Description : </span> <span style={{color:'#757575'}}>{job_description}</span> </p>
            </div>
            <div>
              <p className='py-5'> <span className='font-extrabold'>Job Responsibility : </span> <span style={{color:'#757575'}}>{job_responsibility}</span> </p>
            </div>
            <div>
              <p> <span className='font-extrabold'>Educational Requirement : </span> <span style={{color:'#757575'}}>{educational_requirements}</span> </p>
            </div>
            <div>
              <p className='py-5'> <span className='font-extrabold'>Experience : </span> <span style={{color:'#757575'}}>{experiences}</span> </p>
            </div>
          </div>
          <div>
          <div>
              <div className='jd-container'>
                <p> Job Details </p>
                <hr className='my-5' />
                <div>
                <p> <span className='font-extrabold'>Salary : </span> <span style={{color:'#757575'}}>{salary}</span> </p>
              </div>
              <div>
                <p className='py-4'> <span className='font-extrabold'>Job Title : </span> <span style={{color:'#757575'}}>{job_title}</span> </p>
              </div>
              <p className='mt-10'> Contact Information </p>
              <hr className='my-5'/>
              <div>
                <p> <span className='font-extrabold'><FontAwesomeIcon className='mr-2' icon={faPhone} />Phone : </span> <span style={{color:'#757575'}}>{contact_information.phone}</span> </p>
              </div>
              <div>
                <p className='py-4'> <span className='font-extrabold'><FontAwesomeIcon className='mr-2' icon={faEnvelope} />Email : </span> <span style={{color:'#757575'}}>{contact_information.email}</span> </p>
              </div>
              <div>
                <p> <span className='font-extrabold'><FontAwesomeIcon className='mr-2' icon={faLocationDot} />Address : </span> <span style={{color:'#757575'}}>{location}</span> </p>
              </div>
              </div>
              <div className='grid grid-cols-1 mt-5'><button onClick={()=>handleClick(jobDetails)} className='button'>Apply Now</button></div>
            
          </div>
          </div>
        </div>
    </div>
  )
}

export default JobDetails