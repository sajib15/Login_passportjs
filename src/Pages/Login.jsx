import React from 'react'
import Navbar from '../Components/Navbar'
import {FcGoogle} from "react-icons/fc"
import {FaFacebook} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className=' h-[calc(100vh-60px)] flex items-center justify-center'>
                {/* <h1 className=' text-center text-[32px] font-bold mb-3'>Choose a login Method</h1> */}
                <div className=' flex flex-col bg-[#f8f7f4] shadow-md  rounded-md mt-[100px] items-center w-[60%] h-[100%] sm:h-[75%] sm:flex-row'>
                    <div className='flex-1 flex-col items-center justify-start text-white'>
                        <div className='flex items-center p-15px w-[175px] bg-[#f03131] h-[70px] rounded-md m-auto mb-2 cursor-pointer hover:bg-transparent hover:text-[#f03131]'>
                        <FcGoogle className=' text-[40px]'/>
                        <span className=' text-[30px] pl-[.5rem] '>Google</span></div>
                        <div className='flex items-center p-15px w-[175px] bg-[#5425c2] h-[70px] rounded-md m-auto mb-2 cursor-pointer hover:bg-transparent hover:text-[#5425c2]'>
                            <FaFacebook className=' text-[60px]'/>
                        <span className=' text-[30px] pl-[.5rem]' >Facebook</span></div>
                        <div className='flex items-center p-15px w-[175px] bg-[#242020] h-[70px] rounded-md m-auto cursor-pointer hover:bg-transparent hover:text-[#242020]'>
                            <BsGithub className=' text-[40px]'/>
                        <span className=' text-[30px] pl-[.5rem]'>Github</span></div>

                    </div>
                    <div className='h-[100%] flex items-center justify-center relative'>
                          <div className=' z_index sm:w-[0.5px] sm:h-[70%]'/>
                          <div className=' rounded-full border-[2px] border-[lightgray] p-[10px] bg-white z-[1]'>OR</div>
                    </div>
                    <div className=' flex-1 flex items-center justify-between flex-col'>

                        <input type="text" placeholder='userName' required  className=' w-[200px] p-[15px] mb-[20px] outline-none'/>
                        <input type="password" placeholder='Password' required  className=' w-[200px] p-[15px] mb-[20px] outline-none'/>
                        <button type='submit' className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
