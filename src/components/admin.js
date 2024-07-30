import React, {useEffect, useState } from 'react'
import axios from 'axios'

import Table from 'react-bootstrap/Table'
const Admin = () => {
  
    
    const [data, setdata] = useState([])
     const baseURL = "https://full-stack-ce7x.onrender.com"

   useEffect(() => {
       const fetch = () => {
    
      
        try {
            axios.get( `${baseURL}/login`)
                .then(response => {
                    setdata(response.data)
                       

           
       
                })
                .catch((err => {
                    alert(err.message)
                }))
        
        } catch (error) {
            console.error(error.message)
        
        }
    }
       fetch()
       
     
       
   
   



   }, [])
    
    
   const fetch = () => {
    
      
    try {
        axios.get("http://localhost:4000/api/login")
            .then(response => {
                setdata(response.data)
                   

       
   
            })
            .catch((err => {
                alert(err.message)
            }))
    
    } catch (error) {
        console.error(error.message)
    
    }
}
    
//    let send = document.querySelectorAll("button")
//    // const [User, setUser] = useState("");


//    send.forEach((btn) => {
//        btn.addEventListener("click", (e) => {



           
//            const formData = { _id: e.target.id }
        
             
           
       
//            axios.delete("http://localhost:4000/api/login/delete",formData)
//                .then(response => {
//                    console.log(response.data)
                
//                 //   alert("successfully send", response.data)
//               })
//               .catch((err => {
//                   alert(err.message)
//               }))
     
          

//        })
//      })
    


    
    
 
    


  return (
      <div className='admin  text-white '>
          

          
        
                  <Table stripped bordered hover size="sm"> 
  <thead> 
    <tr> 
      <th width="170"> Name</th> 
      <th width="210">Email</th> 
      <th width="170">Mobile No.</th> 
                      <th width="170">Password</th> 
                      <th width="100" >Remove </th> 
    </tr> 
              </thead>
              <tbody> 
                          
             
              {
              data.map((e) => {
                  return (
                    <tr className="tableData"> 
                          <td>{e.first_name+ " "+e.last_name}</td> 
                          <td>{e.email}</td> 
                          <td>{e.mobile}</td> 
                          <td>{e.password}</td> 
                          <td id={e._id} className=  "bg-black text-white cursor-pointer rounded-md px-4 " name={e.first_name} onClick={
                              (e) => {
                                
                                
                            
                                  axios.post("http://localhost:4000/api/login/delete",{name:e.target.id} )
                                .then(response => {
                             
                                    alert("deleted")
                                 
                               })
                               .catch((err => {
                                   alert(err.message)
                               }))
                      
                                  fetch()
                              }
                              
                          
                              
                          } >Delete</td>
                 
                
                  </tr> 
                      
                  )
              }
              
            )
        }                 

  
   

  
  
  </tbody> 
</Table> 
                  
                  
     

      
          
  
    </div>
  )
}

export default Admin
