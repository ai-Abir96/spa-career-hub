import React from 'react'
import "./blog.css"
const Blog = () => {
  return (
    <div className='blog'>
      <h1 className='text-5xl text-center my-20'>Blog</h1>
      <div>
        <h1 className='text-xl font-bold'>a. When should you use context API?</h1>
        <p className='text-justify' style={{color:'#757575'}}>Ans: The Context API should be used when a single data
        needs to be accessed by multiple components throught the application.
          it is a alternate solution of passing data as props. So we can use 
          context api at the top of the tree and then we can use 
          it across the application without props drilling. </p>
      </div>
      <div className='my-5'>
        <h1 className='text-xl font-bold'>b. What is a custom hook?</h1>
        <p className='text-justify' style={{color:'#757575'}}>Ans: Custom hook is a js function that uses React hooks
        like useState or useEffect to give a resuable logic. It can be shared
          in the Application. it can help removing duplicacy of code in the application.</p>
        
      </div>
     <div>
      <h1 className='text-xl font-bold'>c. What is useRef?</h1>
        <p  className='text-justify' style={{color:'#757575'}}>Ans: useRef is a React hook that gives a way that we can reference a mutable
        value in the component. It returns a refernce object that can be used to store values.</p>
     </div>
      <div className='my-5'>
        <h1 className='text-xl font-bold'>d. What is useMemo?</h1>
        <p  className='text-justify' style={{color:'#757575'}}>Ans: useMemo is react hook that is used for performence optimization. this hook's main function 
        is to  return a memorized value to optimize a complex computation.</p>
      </div>
    </div>
  )
}

export default Blog