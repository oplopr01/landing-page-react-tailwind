import React from 'react'

const Header = () => {
  return (
    <div className=' bg-[#2196f3] p-4'>
      <div className='max-w-[1240px] border border-black mx-3 p-3 flex justify-between'>
        <div className='text-4xl font-extrabold'>
          WsCube Tech
        </div>
        <div>
          <ul className='flex justify-between'>
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
          </ul>
        </div>
    </div>
    </div>
  )
}

export default Header