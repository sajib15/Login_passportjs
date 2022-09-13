import React from 'react'
import {Link} from "react-router-dom"
const Card = ({posts}) => {
  return (
    <div  className='w-[30%] shadow-md rounded-[20px] p-[10px]'>
      <span>{posts.title}</span>
      <img className=' w-[100%] h-[200px] object-cover my-[20px] mx-[0px]' src={posts.image} alt="img" />
      <p className=' text-[#333] mb-[20px] leading-[25px]'>{posts.desc}</p>
      <button className=' bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'> <Link to={`/post/${posts.id}`}>Read More</Link> </button>

    </div>
  )
}

export default Card
