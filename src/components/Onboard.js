import React from 'react'
import { aora, img,path } from './assets/index'

import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
const Onboard = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/login")
    }






  return (
      <div className=' bg-mainbg w-screen  h-screen flex flex-col justify-start items-center   gap-3 md:gap-24 relative'>
          

          <img src={aora} className='w-80  sm:w-20 mt-3 '>
          </img>
          

          <img src={img} className='w-auto h-1/3  '></img>

          <p className=' text-white  leading-[2rem] font-bold text-2 sm:text-[2rem]'>Discover Endless Possibilities with
            
              <span className=' text-[#FF8C00] font-extrabold relative py-1 hover:scale-105 cursor-pointer'>Aora
                  
                  <img src={path} className=' w-20 md:w-28 absolute right-0 bottom-0 '>
                  </img>
              
              </span>
          </p>


          <p className=' text-[#CDCDE0] text-wrap font-light  '>
              Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
          </p>


          <button type="button" onClick={ handleClick} className=' min-w-fit h-auto px-2 py-1 sm:p-3 block
          rounded-lg  font-bold text-lg  hover:scale-105 bg-gradient-to-r  from-[#FF8C00] to-[#FFA300] transition-all ease-in-out duration-300'>
              
              Continue with Email
              

          </button>

          
    
    </div>
  )
}

export default Onboard
