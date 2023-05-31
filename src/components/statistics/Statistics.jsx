import React from 'react'
import './statistics.css'
import { Radar, Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart, Tooltip, ResponsiveContainer} from 'recharts';

const Statistics = () => {
  const myNumbers = [
    {
      name: 'Assignment 1',
      obtainedMark: 57,
      fullMark:60,
    
    },
    {
      name: 'Assignment 2',
      obtainedMark: 60,
      fullMark:60,
    },
    {
      name: 'Assignment 3',
      obtainedMark: 60,
      fullMark:60,
    },
    {
      name: 'Assignment 4',
      obtainedMark: 60,
      fullMark:60,
  
    },
    {
      name: 'Assignment 5',
      obtainedMark: 60,
      fullMark:60,
  
    },
    {
      name: 'Assignment 6',
      obtainedMark: 59,
      fullMark:60,
  
    },
    {
      name: 'Assignment 7',
      obtainedMark: 60,
      fullMark:60,
  
    },
    {
      name: 'Assignment 8',
      obtainedMark: 60,
      fullMark:60,
    },
  ];

  const windowWidth = window.innerWidth;

  const outerRaius = windowWidth <= 640? "80%": "90%";
  return (
    <div className='statistics'>
      <div className='text-5xl font-extrabold text-center my-20'>My Statistics</div>
        <div className='flex justify-center items-center'>
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart outerRadius={outerRaius} width={950} height={800} data={myNumbers}>
              <PolarGrid stroke='#eb3434'/>
              <PolarAngleAxis dataKey="name"/>
              <PolarRadiusAxis angle={45} domain={[0,60]}/>
              <Tooltip/>
              <Radar name="Abir"  dataKey="obtainedMark" stroke="#34eb43" strokeWidth={2} fill="#6b34eb" fillOpacity={0.4} />
              <Radar name="Total Mark: 60" />
              <Legend/>
            </RadarChart>
        </ResponsiveContainer>
        </div>
      
    
  </div>
    
  )
}

export default Statistics