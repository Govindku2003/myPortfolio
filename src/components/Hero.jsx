import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import resumePdf from '../assets/Govind resume pdf.pdf'

const Hero = () => {
  return (
    <motion.div  
    initial={{opacity:0,y:50}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.5,ease:'easeOut'}}
    viewport={{once:true}}
    id='home'
    className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div  className='container flex flex-col-reverse mt-4  gap-10 md:gap-0 md:flex-row mx-auto px-6 justify-between items-center'>
        {/* LeftSide */}
        <div  className='md:w-1/2 mb-10 md:mb-0' >
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>Hi, I'm <span  className='text-amber-300'>Govind kumar Kushwaha</span></h1>
        <h2  className=' text-2xl md:text-4xl font-semibold  mb-6 typewriter'>Full Stack Developer</h2>
        <p className='text-lg text-gray-300 mb-8'>Aspiring Full Stack Developer with knowledge of frontend and backend technologies, focused on building efficient web applications.</p>

        <div className='flex spae-x-4 gap-6'>
          <a href={resumePdf} target="_blank" rel="noopener noreferrer" className='hover:font-semibold md:hover:font-bold py-3 bg-green-700 rounded-lg font-medium hover:bg-green-400 border-2 border-green-400 px-6 transition duration-300'>View Resume</a>
          <a href="#contacts" className='hover:font-semibold md:hover:font-bold py-3 bg-green-400/10 border-yellow-2 rounded-lg font-medium border-2 border-green-400 hover:bg-green-500/60 transition px-6 duration-300'>Contact Me</a>
        </div>
        
        </div>

        {/* right side */}
        <div className='flex justify-center md:w-1/2 '>
        <div className='relative  w-65 h-65 md:w-80 md:h-80'>
          <div className='absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-pink-400  opacity-70'>

            <motion.img 
            animate={{y:[0,-15,0]}}
            transition={{
              duration : 5,
              repeat: Infinity,
              repeatType: 'loop',
              ease :'easeInOut'
            }}
            className='relative rounded-full w-65 h-65 md:w-80 md:h-80 object-cover z-10 animated-float' src={assets.profileImg} alt="profile image" />
          </div>
        </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero