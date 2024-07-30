import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Create from './create'
import { isActiveStyles, isNotActiveStyles } from '../utils/style'
import {motion} from 'framer-motion'

function LogOut() {
    const navigate= useNavigate()
    const handleClick = () => {
        window.localStorage.setItem("auth", "false")
        navigate("/login",{require:true})
    }
  return (
    <motion.div>
  
      <h1  id="shownav" className=' opacity-80 cursor-pointer text-white z-30 absolute right-0 rotate-90 text-4xl m-4 '
        onClick={
          () => {
            document.getElementById("nav").style.display = "flex"
            document.getElementById("shownav").style.display="none"

          }
      }
      
      >|||</h1>
      <div 
  

  

    
        id="nav" className=' bg-mainbg  hidden flex-col w-[120px]  cursor-pointer h-[250px] absolute right-0 top-1 z-10 justify-evenly font-bold text-lg text-white'>

      
      <h1  onClick={
          () => {
            document.getElementById("nav").style.display = "none"
          document.getElementById("shownav").style.display="flex"

        }
     


        
      } className='   self-end mx-4 text-4xl'>X</h1>
          <NavLink className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles} to="/post" element={<Create />}  to="/" element={<Create />}>Home</NavLink>
        
          <NavLink className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles} to="/post" element={<Create />}>Create</NavLink>
          <NavLink className={({ isActive }) => isActive ? isActiveStyles : isNotActiveStyles} to="/post" element={<Create />} onClick={handleClick} to="/login" element={<Create />}>Sign Out</NavLink>
        
          
        
      
      </div>
      </motion.div>
  ) 
}

export default LogOut
