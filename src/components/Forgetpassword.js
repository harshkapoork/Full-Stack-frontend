import React,{ useState} from 'react'
import { FaEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import{ path, aora} from '../components/assets/index'
const Forgetpassword = () => {

     const baseURL = "https://full-stack-ce7x.onrender.com"
const navigate= useNavigate()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
 
        
    const handleClick = () => { 

        navigate("/login")
    }
const handleClick1 = async(e) => {
        const  formData = {
           
            email:email ,
            password: password
    }


        e.preventDefault()
    console.log(formData)
   
      // post data to server using axios
    await axios.post( `${baseURL}/reset`, formData).then((res) => {
       console.log(res.data.status)
        if (res.data.status ===true)
        {
            alert("password changed")
            navigate("/login")
            
        }
        else {
            alert(res.data.message)
            navigate("/signup")
        }
    })

    
    setemail("")
    setpassword("")






        
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

         <div className=' bg-mainbg w-screen min-h-screen  md:h-auto sd:min-h-screen flex flex-col  justify-center '>
          
          <img src={aora} alt=''
              className=' w-20 absolute  top-5  left-3' />
          

          <form  onSubmit={handleClick1}
              className=' flex   flex-col px-7   text-[#CDCDE0] 
          justify-center md:items-center sm:items-start    '>

           
        

<label className=' text-white font-bold text-3xl  self-center mb-6'>
                  <span className=' text-[#FF8C00] font-extrabold relative py-[0.4rem]  md:py-[0.8rem] hover:scale-105 cursor-pointer'> Password Reset
                
                <img src={path} className=' w-20   md:w-28 absolute right-0 bottom-0 '>
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
              <FaEye onClick={show} className='show self-end text-lg absolute z-10 mt-14 mx-3 md:right-[32%] ' />
              
             

           


              <button  type="submit"  className=' md:self-center sm:self-center  min-w-40    font-bold text-lg  hover:scale-105 text-black bg-gradient-to-r  from-[#FF8C00] to-[#FFA300] transition-all ease-in-out duration-300 m-3 
              
              rounded-[8px] border-[1px] p-[16px] md:w-[40%] sm:w-full
              ' >
                  Reset
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

export default Forgetpassword
