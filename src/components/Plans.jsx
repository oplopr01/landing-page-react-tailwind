import React from 'react'

const Plans = () => {
  return (
    <div className='py-[100px]'>
        <div className="max-w-[1240px]  md:mx-auto  mx-[30px] md:grid grid-cols-3 gap-10 text-center">
            <div className=' h-[400px] bg-slate-200 hover:scale-105 duration-[400ms] my-[20px] md:my-[0px]'>
                <p className='font-bold text-4xl'>Product 1</p>
            </div>
          
             <div className=' h-[400px] bg-red-100 hover:scale-105 duration-[400ms] my-[20px] md:my-[00px]'>
             <p className='font-bold text-4xl'>Product 1</p>
             </div>
             <div className=' h-[400px] bg-slate-200 hover:scale-105 duration-[400ms] my-[20px] md:my-[0px]'>
             <p className='font-bold text-4xl'>Product 1</p>
             </div>
        </div>
    </div>
  )
}

export default Plans