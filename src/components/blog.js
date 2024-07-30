import React  from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch } from 'react-icons/fa'
import { useTransform, useViewportScroll,motion } from 'framer-motion'


const Blog = () =>

 

{
   const baseURL = "https://full-stack-ce7x.onrender.com"
  
const [latest, setlatest] = useState([])

  const [post, setpost] = useState([])
  
  
  useEffect( () => {
    axios.get(`${baseURL}/profile`)
    
    .then((res) => {
      // console.log(res.data)
      setpost(res.data)
      setlatest(res.data.slice(0,5))
    })
  
    
  }, [setpost])
  const navigate = useNavigate(); 
  const handleClick = () => {
 
    navigate("/create")
  }
  
  const getpost = () => {
      
 
    if (post.length >0) {
      const data =
      post.map(post => (
   
        <PostCard
          id={post._id}
          username={post.username}
          title={post.title}
          description={post.description}
          image={post.imageURL}
          video={post.videoURL}
                         
            />
            

          ))
      return data
      
    }
    else {
      return <>
        
        

        <h1 className=" text-lg md:text-2xl flex justify-center items-center text-center self-center w-full"> NO POST FOUND</h1>
        <p className=' font-light text-[#CDCDE0] sm:self-center  flex justify-center items-center text-center self-center w-full'>
                    Publish a new Post?
                    <button type="button" onClick={handleClick} className=' text-[#FFA101]'>
                        Click here
                    </button> </p>
       

        
      </>
    }

     
    }
  
    // console.log(post)
            
return(

  <>
    <div div className=' relative'>

<input type="email" placeholder='search a video topic' value="" required
              
  onChange={(e) => {
                 /**setvalue */ (e.target.id = e.target.value)
    e.target.value = ""

  }}
             
          

  className=' bg-[#1E1E2D] rounded-[8px]  text-lg p-[15px] md:w-[80%] sm:w-[90%]  mt-2 mb-2 relative  
                                '/>
<FaSearch className=' text-[#CDCDE0] absolute top-7 right-11 text-xl md:right-28' />

</div>
<p className=' flex  self-start px-3 text-[#CDCDE0]'>Trending Videos</p>

<div class="flex flex-col bg-mainbg  m-auto p-auto">

<div
class="flex overflow-x-scroll pb-10 hide-scroll-bar"
>
<div
class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >
          
          {latest.map(post => (
           <Slider video={post.videoURL}/>
      
    ))}



</div>

</div>
</div>
    
    

    <section
      
      className=" bg-mainbg text-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className=" container">
          <div className=" -mx-4 flex flex-wrap">
            <div className=" w-full px-4">
              <div className=" mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className=" mb-2 block text-lg font-semibold text-[#FF8C00]">
                  Our Videos
                </span>
                <h2 className= " mb-4 text-3xl font-bold  text-gray-400 sm:text-4xl md:text-[40px]">
                  Our Recent Videos
                </h2>
                <p className=" text-[#CDCDE0] ">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

                <div  className=" blog -mx-4 flex flex-wrap ">
          {getpost()}   
          {/* this fetch the post and show on screen */}
            </div>
           </div>
           </section>
          

    </>
  );
};

export default Blog;
// code to genetrate cards
const PostCard = ({ username, id,video, image, title, description }) => {
  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 2]);
 
  return (
    < >  
      





      <motion.div  initial={{ opacity: 0.4, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={{ x: 0 }}
    transition={{ duration: 0.6 }}
        id={id} className="   post bg-red-150  relative  w-full px-4 md:w-1/2 lg:w-1/3">
     <a  className=" flex justify-center" href={video}>   <img src={image} alt=""
          
          className=" img flex w-[87%] top-9  h-[200px]  z-10  cursor-pointer   transition-all  ease-in duration-800  object-cover  " />
          </a>
              <p className="  self-start flex">{username}</p>
              <div  className=" post mb-10 w-full relative">
      <div>
          
            <h3 className="  text-yellow-500">
              <a
                href={video}
                className=" mb-4 inline-block text-xl font-semibold text-yellow-500 hover:text-gray-300 dark:text-white sm:text-2xl md:text-xl lg:text-xl xl:text-2xl capitalize no-underline" 
              >
                {title}
              </a>
            </h3>
            <p className=" text-base text-body-color dark:text-dark-6">
              {description}
            </p>
          </div>
        </div>
        </motion.div>
   </>
  );
};


const Slider = ({ video, id }) => {
  
  return (

  
    <motion.div  whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.8 }}
    style={{ x: 0 }} class="inline-block px-3 mt-5">
      
            <div if={id}
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md  border hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ><> <a  href={video}><video muted autoPlay loop className=' w-full h-full' src={video}> </video></a></>
          
      </div>
    </motion.div>  
    
      
      


    );
}
