import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList';
import { useLoaderData } from 'react-router-dom';
import { data } from 'autoprefixer';

const JobCategory = () => {
  const [category,setCategory] = useState([]);

  useEffect(()=>{
    fetch('jobCategoryData.json')
    .then(res => res.json())
    .then(data => setCategory(data))
  },[])

  return (
    <div>
        <h1 style={{marginTop:100}} className='text-4xl text-center'>Job Category</h1>
        <div className='lg:flex justify-between items-center'>
          {
            category.map( jcd=>(<CategoryList key={jcd.id} jcd={jcd} ></CategoryList>))
          }
        </div>
       
    </div>
  )
}

export default JobCategory