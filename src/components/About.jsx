import React from 'react'
import {motion} from 'framer-motion'
import { assets } from '../assets/assets'
import { div } from 'framer-motion/client'

const About = () => {
  return (
   
     <motion.div 
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,ease:'easeOut'}}
    viewport={{once:true}}
    id='about'
    className='bg-dark-200 py-20'
    >
     <div className='conatiner  mx-0 px-6'>
      {/* heading */}
      <h2 className='text-3xl  text-center font-semibold md:font-bold'> About <span className='text-yellow-400'>Me</span></h2>
      <p className='text-center  max-w-2xl mx-auto mb-15'>Get to know more inforamtion about me</p>

      {/* image + text*/}
      <div  className='flex flex-col md:flex-row  items-center gap-10'>
        {/* image */}
        <div className='md:w-1/2 h-1/2 rounded-2xl overflow-hidden'>
        <div className='flex justify-center items-center object-cover  '>
          <motion.img 
        initial={{opacity:0,y:50}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.9,ease:'easeInOut'}}
         viewport={{once:false , amount:0.2}}
         src={assets.profileImg} alt=" myProfile"
         className='md:w-1/2 md:h-1/2 object-cover rounded-4xl ' />
        </div>
        </div>
        {/* textcontent */}
        <motion.div 
        initial={{opacity:0,y:50}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.9,ease:'easeInOut'}}
         viewport={{once:false , amount:0.2}}
         className='md:w-1/2'
        >
          <div className=' rounded-2xl p-5'>

            <h3 className='text-2xl font-semibold mb-8 text-yellow-400 '>My Jounery</h3>
            <p>I am a <span className='text-green-400'> MERN Stack Developer</span> passionate about building modern, user-friendly web applications and analyzing data to solve real-world problems while continuously improving my skills. </p>
            <p>I start my jaunary with basic HTML CSS and Js website and has build complex web application with modern framwork</p>

            {/* card */}


          </div>


        </motion.div>
      </div>


     </div>

    </motion.div>
   
  )
}

export default About