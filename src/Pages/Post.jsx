import React from 'react'
import {useLocation} from "react-router"
import { posts } from '../data'
const Post = () => {
  const location= useLocation();
  const path= location.pathname.split("/")[2];
  const post = posts.find((p)=> p.id.toString() == path);
  return (
    <div  className=' flex flex-col items-center h-[calc(100vh-60px)]'>
     
      <img className=' w-[100%] h-[300px] object-cover mb-[20px]' src={post.image} alt="img" />
      <h1>{post.title}</h1>
      <p className=' text-[gray] font-light py-[0px] px-[100px] text-[24px]'>{post.desc}</p>
      <p className=' text-[#333] p-[100px] pt-[50px] text-[18px] leading-[24px]'>{post.longDesc}</p>
    </div>
  )
}

export default Post
