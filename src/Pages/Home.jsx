import React from 'react'
import Card from '../Components/Card'
import { posts } from '../data'

const Home = () => {
  return (
    <div className="flex px-[100px] py-[50px] justify-between flex-wrap">
      {posts.map((posts)=>{
       return  <Card key={posts.id} posts= {posts}/>
      })}
    </div>
  )
}

export default Home
