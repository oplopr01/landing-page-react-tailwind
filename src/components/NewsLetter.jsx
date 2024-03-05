import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-[#2196f3] h-full w-full md:flex justify-between px-[100px] gap-6'>
        <div className='my-[20px] w-[auto]  md:p-[30px]'>
            <h1 className='text-[23px] md:text-[30px] text-white font-bold'>Want to learn latest IT skill..?</h1>
            <h1 className='text-[12px] md:text-[15px] text-white text-justify font-bold' >signup to our newslatter and stay upto date</h1>
        </div>
        <div className='my-[20px] w-[auto]  md:p-[30px]'>
            <input type="text" className='rounded-sm mr-4 p-1 md:p-2 ' placeholder='Email' />
            <button className='p-1 md:p-2 bg-black text-white rounded-md'>CLick here</button>
            <p className='text-[18px] md:text-[20px] font-semibold text-white'>we care about protection of your data. read our</p>
            <a href="">Privace Policy</a>
        </div>
    </div>
  )
}

export default NewsLetter