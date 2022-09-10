import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex bg-[#ce26c5] h-[60px] text-white items-center justify-around'>
       <span className=' font-bold'>SAJIB</span>
       <ul className=' flex list-none items-center font-semibold'>
         <li className=' w-[50px] h-[50px] mr-[20px]'><img className='rounded-full object-cover' src="https://assets-prd.ignimgs.com/2020/08/06/john-wick-button-1596757485786.jpg" alt="" /></li>
         <li className='mr-[20px]'>Jhon Wick</li>
         <li>Login</li>
       </ul>
    </div>
  )
}

export default Navbar
