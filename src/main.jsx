import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Homepage from './components/homepage/Homepage'
import Statistics from './components/statistics/Statistics'
import AppliedJobs from './components/appliedJobs/AppliedJobs'
import Blog from './components/blog/Blog'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import JobDetails from './components/jobdetails/JobDetails'
import getJobDetails from './loaders/loader'
import NotFound from './components/notfountd/NotFound'
const router = createBrowserRouter([
  {
      path:'/',
      element:<App/>,
      children:[
        {
          path:'/',
          element: <Homepage></Homepage>,
          loader: ()=> fetch('/jobDescription.json') 
        },
        {
            path:'jobs/:jobId',
            element: <JobDetails></JobDetails>,
            loader: getJobDetails,
        },
        {
          path:'statistics',
          element: <Statistics></Statistics>
        },
        {
          path:'applied-jobs',
          element:<AppliedJobs></AppliedJobs>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }
        
      ]

  },
  {
    path: '/*',
    element: <NotFound></NotFound>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

