import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from './Footer'
import { aora, logo } from '../components/assets/index'
import Blog from './blog'
import { useNavigate } from 'react-router-dom'
import Nav from './LogOut'


     

import LogOut from './LogOut'

const Home = () => {

  const baseURL = "https://full-stack-ce7x.onrender.com"
  

  const [post, setpost] = useState([])
  
  



  useEffect(() => {
    axios.get(`${baseURL}/profile`)
    
    .then((res) => {
      // console.log(res.data)
      setpost(res.data)
    })
  
    if (window.localStorage.getItem("auth") === "false") {
      navigate("/login")
    }
    
  }, [setpost])


  
  
  
  const navigate = useNavigate()
  


    return (
      <div className=' bg-mainbg  w-screen h-screen   '>
      <Nav/>
    
        <div className='header flex  justify-between py-4 px-3 h-24 '>


          <p className='max-w-screen  flex flex-col text-[#FFA300] font-light text-[1rem]  '>
            Welcome back

            <span className=' text-white font-semibold text-[1.2rem]  '>
              {post.id}

          
            </span>
          </p>



          <img src={logo} alt=""
            className='  hidden self-center h-12 w-12  '
          ></img>



        </div>
      
     


        <Blog />


        <Footer />
   
      </div>
         
    
         


    )
}
  


export default Home
