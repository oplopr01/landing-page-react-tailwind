import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  let [toggle, setToggle] = useState(false)
  return (
    <div className=' bg-[#2196f3] p-4'>
      <div className='max-w-[1240px] border border-black mx-auto py-[15px] p-3 flex justify-between items-center '>
        <div className='text-4xl font-extrabold'>
          WsCube Tech
        </div>
        {
          toggle ? <AiOutlineMenu onClick={()=>{setToggle(!toggle);}} className='text-white text-3xl sm:hidden block '/> 
          :
          <AiOutlineClose onClick={()=>{setToggle(!toggle);}} className='text-red-800 text-3xl sm:hidden block '/> 

        }
        
        
          <ul className='hidden sm:flex justify-between gap-3 text-white'>
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
          </ul>

          {/* Responsive Menu start */}
          <ul className={`duration-300 sm:hidden fixed bg-black top-[102px]  text-white w-full h-full  ${toggle ? 'left-[-100%]' : 'left-[0%]'}  `}>
          <li className='p-2 '>Home</li>
          <li className='p-2'>Company</li>
          <li className='p-2'>Resources</li>
          <li className='p-2'>About</li>
          <li className='p-2'>Contact</li>
          </ul>
          {/* Responsive Menu end*/}



    </div>
    </div>
  )
}

export default Header