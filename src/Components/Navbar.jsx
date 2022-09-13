import React from 'react'
import {Link} from "react-router-dom"
const Navbar = ({user}) => {

  const logout=()=>{
    window.open("http://localhost:5000/auth/logout","_self");
  };
  return (
    <div className=' flex bg-[#ce26c5] h-[60px] text-white items-center justify-around'>
       <span className=' font-bold'><Link to={"/"}>SAJIB</Link> </span>
       {user? 
       (<ul className='cursor-pointer flex list-none items-center font-semibold'>
         <li className=' w-[50px] h-[50px] mr-[20px]'>
          <img className='rounded-full object-cover' src={user.photos[0].value} alt="user" referrerpolicy="no-referrer"/>
         </li>
         <li className='mr-[20px]'>{user.displayName}</li>
         <li onClick={logout} >LogOut</li>
       </ul>) : (<Link to={"/login"}> Login</Link>)}
    </div>
  )
}

export default Navbar
