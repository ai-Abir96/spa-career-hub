import React from 'react'
import './footer.css'
import socialImage from '/assets/Icons/Group 9969.png'

const Footer = () => {
  return (
   <div  className='footer'>
        <div className='footer-container'>
            <div className='grid lg:grid-cols-5 lg:gap-5 gap-10 text-center lg:text-left'>
                <div className='flex flex-col justify-center items-center lg:items-start'>
                    <h1 className='text-2xl mb-4'>Career Connect</h1>
                    <p>Career Connect is a website or platform<br/>that connects job seekers with potential employers</p>

                    <img className='my-4' src={socialImage} alt="" />
                </div>
                <div className='lg:pl-10'>
                    <h3 className='text-xl'>Company</h3>
                    <p className='my-4'>About Us</p>
                    <p>Work</p>
                    <p className='my-4'>Latest News</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h3 className='text-xl'>Product</h3>
                    <p className='my-4'>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p className='my-4'>Customers </p>
                    <p>Integrations</p>
                </div>
                <div>
                    <h3 className='text-xl'>Support</h3>
                    <p className='my-4'>Help Desk</p>
                    <p>Sales</p>
                    <p className='my-4'>Become a Partner </p>
                    <p>Developers</p>
                </div>
                <div>
                    <h3 className='text-xl'>Contact</h3>
                    <p className='my-4'>Mirpur-10, Dhaka-1206</p>
                    <p>+880-1302-794996</p>
                    
                </div>
            </div>
            <hr className='my-10' />

            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <div>@2023 CareerConnect. All Rights Reserved</div>
                <div>Powered by CareerConnect</div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer