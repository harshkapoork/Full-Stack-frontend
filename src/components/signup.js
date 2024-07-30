import React,{useEffect, useState} from 'react';
import { aora,path } from './assets';
import { FaEye } from 'react-icons/fa';
import axios from 'axios';

import { useNavigate, } from 'react-router-dom';

const Signup = () => 
    
{
 const baseURL = "https://full-stack-ce7x.onrender.com"

    useEffect(() => {
        if (window.localStorage.getItem("auth") === "true") {
          navigate("/")
        }
      })

 
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/login")
    }
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
 
const handleClick1 = async(e) => {
        const  formData = {
            username: username,
            email: email,
            password: password
    }

    
    


        e.preventDefault()
    console.log(formData)
   
    // post data to server using axios
    await axios.post(`${baseURL}/signup`, formData)
        .then((res) => {

            if (res.data.status === true) {
                alert("Signup success")
                navigate("/login")
                setusername("")
                setemail("")
                setpassword("")
                  
                    }
                    else {
                alert("Signup failed")
                setusername("")
                setemail("")
                
                    }
                
       
               
          
            
})
        
    



    }

  
 







    const show = () => {
        const pass = document.querySelector(".password")
        if (pass.type === "password") {
            pass.type = "text"
        }
        else {
            pass.type = "password"
            
        }
    }

        return (
      
        
            <div className=' bg-mainbg w-screen min-h-screen  md:h-full sd:min-h-screen flex flex-col  justify-center  '>

                <img src={aora}
                    className=' w-20 absolute  top-5  left-3' />
            

                <form method="post" action="" onSubmit={handleClick1}
                    className=' flex   flex-col px-7   text-[#CDCDE0] 
            justify-center md:items-center sm:items-start overflow-hidden  '>

             
          

                    <label className=' text-white font-bold text-3xl  self-center mb-6'>
                    <span className=' text-[#FF8C00] font-extrabold relative py-[0.8rem] hover:scale-105 cursor-pointer'>Signup
                  
                  <img src={path} className=' w-19  md:w-28 absolute right-0 bottom-0 '>
                  </img>
              
              </span>


                 
                    
                 
                    </label>


                    <label  className=' md:mr-[31%]'>
                        Username</label>

                    <input id="username" type="text" value={username} required
                    
                        maxLength={20}
                         onChange={(e) => {
                             setusername(e.target.id = e.target.value)
                             e.target.value=""

                        }}
                        


                        placeholder='your unique username'
                        className=' bg-[#1E1E2D] rounded-[8px] border-[1px] p-[16px] md:w-[40%] sm:w-full '>
                    </input>

               

                    <label className='md:mr-[35%]  '>Email</label>

                    <input id="email" type="email" value={email} required
                        
                        onChange={(e) => {
                            setemail(e.target.id = e.target.value)
                            
  
                          }}
                          
                        placeholder='your email'
                        className=' bg-[#1E1E2D] rounded-[8px] border-[1px] p-[16px] md:w-[40%] sm:w-full  
                        '>
                    </input>


                    <label className=' md:mr-[33%]'>Password</label>

                    <input id="password" type="password" value={password} required
                    minLength={8}
                    onChange={(e) => {
                        setpassword(e.target.id=e.target.value)

                      }}
                      
                        
                        
                        placeholder=' your password'
                        className='password bg-[#1E1E2D] rounded-[8px] border-[1px] p-[16px] md:w-[40%] sm:w-full'/>
                    <FaEye onClick={show} className='show self-end text-lg absolute z-10 mt-28 mx-3 md:right-[32%]'/>
               




                    <button type='submit'  className='md:self-center sm:self-center  min-w-40    font-bold text-lg  hover:scale-105 text-black bg-gradient-to-r  from-[#FF8C00] to-[#FFA300] transition-all ease-in-out duration-300 m-3 rounded-[8px] border-[1px] p-[16px] md:w-[40%] sm:w-full' >
                        Sign-Up
                    </button>


                    <p className=' font-light text-[#CDCDE0] sm:self-center'>
                        Already have an account?
                        <button type="button" onClick={handleClick} className='text-[#FFA101]'>
                            Login
                        </button> </p>

                </form>
        
            </div>
        
        
        )
    

    
}



  

    export default Signup
