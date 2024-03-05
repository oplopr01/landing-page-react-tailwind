import React from 'react'
import { ReactTyped } from "react-typed";
const Banner = () => {
  return (
    <div className='bg-[#2196f3] h-full w-full py-[100px]'>
        <div className='max-w-[1240px] mx-auto text-center  font-bold '>
            <p className='text-2xl sm:text-4xl'>Lorem ipsum dolor sit</p>
            <p className='text-white text-[40px] sm:text-[60px]'>Technologies I Works On</p>
            <p className=' text-white text-[22px] sm:text-[40px] '>Develop Using <ReactTyped className='text-yellow-400'
            strings={["Javascript", "React..", "NodeJS","ExpressJS","SQL","JAVA"," HTML","CSS","Tailwind" ]} 
            typeSpeed={70} 
            backSpeed={40}
            loop={true}
            showCursor={false} /></p>
        <button className='p-2 bg-black text-white rounded-md'>CLick here</button>
        </div>

    </div>
  )
}

export default Banner