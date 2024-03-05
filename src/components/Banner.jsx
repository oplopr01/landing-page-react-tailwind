import React from 'react'
import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className='bg-[#2196f3] h-full w-full py-[100px]'>
        <div className='max-w-[1240px] mx-auto text-center  font-bold '>
            <p className='text-2xl sm:text-4xl'>Learn with Us</p>
            <p className='text-white text-[40px] sm:text-[60px]'>Grow with Us</p>
            <p className=' text-white text-[22px] sm:text-[40px] '>Learn <ReactTyped 
            strings={[" Javascript", "React..", "NodeJS"]} 
            typeSpeed={70} 
            backSpeed={40}
            loop={true} /></p>
        <button className='p-2 bg-black text-white rounded-md'>CLick here</button>
        </div>

    </div>
  )
}

export default Banner