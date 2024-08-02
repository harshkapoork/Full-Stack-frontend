import React, { useState }  from 'react'
import { path } from './assets'
import axios from 'axios'
import Nav from './LogOut'
const Create = () => {
    const baseURL = "https://full-stack-ce7x.onrender.com"
    



    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [videoURL, setvideoURL] = useState("")
    const [imageURL, setimageURL] = useState("")
    const [id, setid] = useState("harsh_kapoor")
 
    const handleClick1 = async (e) => {
        const formData = {
           
            id: id,
            title: title,
            description: description,
            imageURL: imageURL,
            videoURL: videoURL
            
        }


        e.preventDefault()
        console.log(formData)
   
        // post data to server using axios
        await axios.post(`${baseURL}/profile`, formData).then((res) => {
            console.log(res.data)
            if (res.data.status == true) {
                alert("post Published")

                
            }
            else {
                alert("post not Published")
                
            }
            setdescription("")
            settitle(" ")
            setimageURL("")
            setvideoURL("")

    

        
        })
    }

    const role = "member";
    if (role === "admin") {
            
        return (
            <div className=' bg-mainbg w-screen h-screen'>
                <Nav />







                <div div className='    '>
            
                    <label className=' text-white font-bold text-3xl left-0 top-2 z-10 self-start flex p-4 sm:mb-5 md:mb-0 '>
                
                        <span className=' text-[#FF8C00] font-extrabold relative py-[0.4rem]  md:py-[0.8rem] hover:scale-105 cursor-pointer'>
                    
                            Upload Video
              
                    
                            <img src={path} className=' w-20   md:w-24 absolute right-0 bottom-0 ' />
                        

                    
                        </span>


                    </label>
            
                    {/* form start here */}
                    <form onSubmit={handleClick1}
             
                        className=" text-white w-full flex flex-col justify-center items-center ">
                

                        <input id="title" type="text" placeholder='Video Title' required
                            value={title} className=' bg-[#1E1E2D] rounded-[8px]  text-lg p-[15px] md:w-[80%] sm:w-[90%]  mt-2 mb-2 relative'

              
                            onChange={(e) => {
                                settitle(e.target.id = e.target.value)

                            }} />


                        <input id="imageURL" type="text" placeholder='image thumbnail' required value={imageURL}
                            className=' bg-[#1E1E2D] rounded-[8px]  text-lg p-[15px] md:w-[80%] sm:w-[90%]  mt-2 mb-2 relative '
              
                            onChange={(e) => {
                                setimageURL(e.target.id = e.target.value)
              
                            }} />
                        <input id='videoURL' type="text" placeholder='Video URL' required value={videoURL}
              
                            onChange={(e) => {
                                setvideoURL(e.target.id = e.target.value)
              
            
                            }}
            
                            className=' bg-[#1E1E2D] rounded-[8px]  text-lg p-[15px] md:w-[80%] sm:w-[90%]  mt-2 mb-2 relative  
                                              '/>
                
                        <input id="description " type="textbox" placeholder='Video Description' required value={description}
              
                            onChange={(e) => {
                                setdescription(e.target.id = e.target.value)
              
            
                            }}
            
                            className=' bg-[#1E1E2D]  flex rounded-[8px] sm:h-[13rem] md:h-[9rem] text-lg p-[15px] md:w-[80%] sm:w-[90%]  mt-2 mb-1 relative  
                                              '/>
     
                        <button type="submit" className=' md:self-center sm:self-center  min-w-40    font-bold text-lg  hover:scale-105 text-black bg-gradient-to-r  from-[#FF8C00] to-[#FFA300] transition-all ease-in-out duration-300 m-3  rounded-[8px] border-[1px] p-[16px] md:w-[40%] sm:w-full' >
                            Publish
                        </button>
                    </form>
                </div>

    
            </div>
        )
    }

    else {
        
        return (
            <div className=' w-screen h-screen flex-col      bg-mainbg text-white justify-center items-center flex text-center'>

                <h1>You Are Not Admin</h1>
                <a className=' text-yellow-400'  href='/'>Go back</a>



            </div>
            


        )
        

    }



  
}

export default Create
