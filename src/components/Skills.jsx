
import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <motion.div  
    initial={{opacity:0,y:50}}
         whileInView={{opacity:1,y:0}}
         transition={{duration:0.5 ,ease:'easeInOut'}}
         viewport={{once:false , amount:0.2}}
         id='skills'
         className='bg-dark-100 py-20'
    >
      <div className='container mx-auto px-6  mb-8' >
        <h2 className='text-center text-3xl font-bold'>My <span className='text-yellow-400'>Skills</span></h2>
        <p className='text-center mb-10'>Technology, use for crating web</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {
            skills.map((skill,index) =>(
              <div key={index} className='bg-dark-300 rounded-2xl p-6 hover:-translate-y-2 hover:bg-slate-800 hover:shadow-2xl transition duration-300 ease-out cursor-pointer'>
                <div>
                  <skill.icon className=' w-8 h-8 text-green-600 mr-6'/>
                  <h3>{skill.title}</h3>
                </div>
                <p className='mb-3'>{skill.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {skill.tags.map((tech) => (
                    <span key={tech} className='inline-flex px-3 py-1 bg-dark-400 rounded-full text-sm'>
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            ))
          }
        </div>

      </div>
    </motion.div>
  )
}

export default Skills