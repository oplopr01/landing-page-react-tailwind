import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  let [toggle, setToggle] = useState(false)
  return (
    <div className=' bg-[#2196f3] p-4 sticky top-0'>
      <div className='max-w-[1240px] mx-auto py-[15px] p-3 flex justify-between items-center '>
        <div className='text-4xl font-extrabold'>
          LOGO HERE
        </div>
        {
          toggle ? <AiOutlineClose onClick={()=>{setToggle(!toggle);}} className='text-red-800 text-3xl sm:hidden block '/>  
          :
          <AiOutlineMenu onClick={()=>{setToggle(!toggle);}} className='text-white text-3xl sm:hidden block '/> 

        }
        
        
          <ul className='hidden sm:flex justify-between gap-3 text-white'>
          <li><a href="/">Home</a></li>
          <li><a href="/">Company</a></li>
          <li><a href="/">Resources</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
          </ul>

          {/* Responsive Menu start */}
          <ul className={`duration-300 sm:hidden fixed bg-black top-[102px]  text-white w-full h-full  ${toggle ? 'left-[0%]' : 'left-[-100%]'}  `}>
          <li className='p-2'><a href="/">Home</a></li>
          <li className='p-2'><a href="/">Company</a></li>
          <li className='p-2'><a href="/">Resources</a></li>
          <li className='p-2'><a href="/">About</a></li>
          <li className='p-2'><a href="/">Contact</a></li>
          </ul>
          {/* Responsive Menu end*/}



    </div>
    </div>
  )
}

export default Header