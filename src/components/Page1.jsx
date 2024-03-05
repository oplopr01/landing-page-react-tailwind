import React from 'react'
import image1 from "../assets/desctop changin gif.gif"
const Page1 = () => {
  return (
    <div>
        <div className='max-w-[1240px] h-auto m-10  md:grid grid-cols-2 items-center px-[10px] flex flex-col'>
            <div className='col-span-1 pr-[70px]'>
                <img src={image1} alt="" className=' h-60 w-auto  '/>
            </div>
            <div className=' col-span-1 pt-3 text-justify'>
                <p className=' font-bold text-green-400'>learn from experts</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, nihil fugiat reiciendis saepe itaque pariatur optio non temporibus quasi tempora aperia.</p>
                <button className='m-2 p-2 bg-black text-white font-bold rounded-md mx-auto'>CLick here</button>

            </div>

        </div>
    </div>
  )
}

export default Page1