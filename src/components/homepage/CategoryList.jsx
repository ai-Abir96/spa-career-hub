import React from 'react'

const CategoryList = (props) => {
    const {icon,category,totalPositions} = props.jcd;
  return (
    <div className='job-category flex flex-col items-center lg:items-start'>
        <img style={{width:50,height:50}} src={icon} alt="" />
        <h3 className='text-2xl py-5'>{category}</h3>
        <p>{totalPositions} Jobs Available</p>
    </div>
  )
}

export default CategoryList