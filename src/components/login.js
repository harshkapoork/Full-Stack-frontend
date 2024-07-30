
import { aora,path } from './assets'
import { FaEye, FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { app } from '../config/firebase'
import {getAuth,GoogleAuthProvider,FacebookAuthProvider, signInWithPopup}  from 'firebase/auth'


import axios from 'axios'
import App from '../App'

   


const Login = ({ setAuth }) => {
    const baseURL = "https://full-stack-ce7x.onrender.com"

 


    


  
    
    
    const navigate = useNavigate()
  


    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
 
const handleClick = async(e) => {
        const  formData = {
           
            email:email ,
            password: password
    }
      e.preventDefault()
    // console.log(formData)
   
    // post data to server using axios
    
    try { await axios.post(`${baseURL}/login`, formData).then((res) => {
           console.log(res.data.userData)
            if (res.data.status ===true)    
            {
                // setAuth(true)
                window.localStorage.setItem("auth","true")
            
                navigate("/")
                setemail("")
                setpassword("")
                
            }
            else {
                alert("Email or password is incorrect")
                setpassword("")
              
                navigate("/login")
            }
        })
        
    } catch (error) {
        alert("serer not responding")
        setpassword("")
        
    }
   
    }

    const handleClick1 = () => {
    
      
        navigate("/reset")
    }
    const handleClick2 = () => {
    
        navigate("/signup")
    }

    const show = () => {
        const pass = document.querySelector(".password")
        if (pass.type ==="password") {
            pass.type="text"
        }
        else {
            pass.type="password"
     }
    }
    
    //  handle login with google

    const provider = {
        facebook: new FacebookAuthProvider(),
        google:  new GoogleAuthProvider()

    }
       
    const auth = getAuth(app)
    const firebaseAuth=getAuth()
    
    const handleGoogleLogin = async () => {
     
        await signInWithPopup(auth, provider.google).then((res) => {
            if (res) {

                firebaseAuth.onAuthStateChanged((res) => {
                    
                    console.log(res.accessToken)
                    axios.post("http://localhost:4000/login/google", {
                      token:{
                            "authorization": res.accessToken
                        }}
                    )
                })




                // setAuth(true)
             

                window.localStorage.setItem("auth", "true")
                navigate("/", {replace :true})
            }
        // console.log(res)  this gives user data 
    })
        
    


}

    //  handle login with google

    useEffect(() => {
        if (window.localStorage.getItem("auth") === "true") {
            navigate("/",{replace:true})
        }
    })


    return (
        <div className=' bg-mainbg w-screen min-h-screen  md:h-auto sd:min-h-screen flex flex-col  justify-center '>
          
            <img src={aora}
                className=' w-20 absolute  top-5  left-3' />
            <form method="post" action="" onSubmit={handleClick}
                className=' flex   flex-col px-7   text-[#CDCDE0] 
            justify-center md:items-center sm:items-start    '>

             
          

<label className=' text-white font-bold text-3xl  self-center mb-6'>
                    <span className=' text-[#FF8C00] font-extrabold relative py-[0.7rem]  hover:scale-105 cursor-pointer'> Login
                  
                  <img src={path} className=' w-19  md:w-28 absolute right-0 bottom-0 '>
                        </img>
                    </span>
                    </label>
                <label className=' md:mr-[35%] '>Email</label>
                <input type="email" placeholder='your email'value={email} required  
                        
                        onChange={(e) => {
                            setemail(e.target.id = e.target.value)
                            e.target.value=""

                       }}
                       
                    

                    className=' bg-[#1E1E2D] rounded-[8px] border-[1px] p-[16px] md:w-[40%] sm:w-full  mt-2 mb-2
                        '>
                </input>


                <label className='  md:mr-[33%]'>Password</label>
                <input type='password' placeholder='your password'value={password} required  minLength={8}
                        
                        onChange={(e) => {
                            setpassword(e.target.id = e.target.value)
                            e.target.value=""

                       }}
                       
                    className='password bg-[#1E1E2D] rounded-[8px] border-[1px] p-[16px] md:w-[40%] sm:w-full mt-2 mb- '/>
                <FaEye onClick={show} className='show self-end text-lg absolute z-10 mt-2 mx-3 md:right-[32%] '/>
               

                <p onClick={handleClick1}
                    className='  cursor-pointer hover:text-blue-400 hover:scale-110 font-light text-[#CDCDE0] md:w-[fit]   self-center'>
                    Forget password
                </p>


                <button  type="submit"  className=' md:self-center sm:self-center  min-w-40    font-bold text-lg  hover:scale-105 text-black bg-gradient-to-r  from-[#FF8C00] to-[#FFA300] transition-all ease-in-out duration-300 m-3 
                
                rounded-[8px] border-[1px] p-[16px] md:w-[40%] sm:w-full
                ' >
                    Login
                </button>


                <p className=' font-light text-[#CDCDE0] sm:self-center'>
                    Don't have an account?
                    <button type="button" onClick={handleClick2} className='text-[#FFA101]'>
                        Signup
                    </button> </p>

                
             
            </form>
            < button onClick={handleGoogleLogin} type="button" className=' md:self-center sm:self-center  min-w-40    font-bold text-lg  hover:scale-105 bg-white transition-all ease-in-out duration-300 m-0 rounded-[8px] border-[1px] p-[5px] md:w-[20%] sm:w-full
           flex justify-evenly items-center hidden
                ' >
                  <FaGoogle className=' text-xl'/> Login With Google
                </button>
          
      
        </div>

        
    )
}

export default Login
