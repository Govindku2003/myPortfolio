import { motion } from 'framer-motion'
import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarkedAlt, FaPhone, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.div  
     initial={{opacity:0,y:50}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:0.5,ease:'easeInOut'}}
             viewport={{once:false , amount:0.2}}
             id='contacts'
             className='py-20 bg-dark-200'
    
    >

      <div className=' container px-6 mx-auto'>
        <h2 className=' text-3xl text-center  mb-3'>My <span  className='text-yellow-400'>Contact</span></h2>
        <p className='text-center'>Let's talk to Me</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
        {/* contact form */}
        <div>
          <form action="" className='space-y-6'>
            <div>
              <label htmlFor="name" className='block text-gray-200 mb-2'> Your Name</label>
              <input  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text" />
            </div>

             <div>
              <label htmlFor="email" className='block text-gray-200 mb-2'> Enter Email</label>
              <input  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="email" />
            </div>

             <div>
              <label htmlFor="message" className='block text-gray-200 mb-2'> Your Msessage</label>
              <textarea  className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text" />
            </div>
            <button type='submit'  className='w-full px-5  py-3 bg-green-600 rounded-lg font-medium hover:font-bold hover:text-xl hover:bg-green-400 duration-300  cursor-pointer'>Send</button>
          </form>
        </div>
        {/* contact info */}
        <div className='space-y-8 mt-8'>
          <div className='flex items-start'>
            <div className='text-pink-600 text-2xl mr-4'>
              <FaMapMarkedAlt/>
              </div>
              <div>
                <h3 className=' text-lg font-bold  mb-2'>Location</h3>
                  <p>Lucknow, Nyay Viahr Colony</p>
              </div>
           </div>
           <div className='flex items-start'>
            <div className=' text-fuchsia-500 text-2xl mr-4'>
              <FaEnvelope/>
              </div>
              <div>
                <h3 className=' text-lg font-bold  mb-2'>Email</h3>
                  <p>gkk108ram@gmail.com</p>
              </div>
           </div>
           <div className='flex items-start'>
            <div className='text-emerald-500 text-2xl mr-4'>
              <FaPhone/>
              </div>
              <div>
                <h3 className=' text-lg font-bold  mb-2'>Contact No</h3>
                  <p>+91 9569650519</p>
              </div>
           </div>
              <div className='pt-4'>
                <h3 className='text-lg font-semibold mb-4'>My Social Media</h3>
                <div  className='flex space-x-4'>
                  <a href="https://github.com/Govindku2003" className=' w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
                    <FaGithub/>
                    </a>

                     <a href="https://www.linkedin.com/in/govind-kumar-kushwaha-618538293/o" className=' w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue hover:bg-blue hover:text-white transition duration-300'>
                    <FaLinkedin/>
                    </a>

                     <a href="#" className=' w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-amber-600 hover:bg-amber-700 hover:text-white transition duration-300'>
                    <FaInstagram/>
                    </a>

                     <a href="#" className=' w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-emerald-400 hover:bg-emerald-400 hover:text-white transition duration-300'>
                    <FaWhatsapp/>
                    </a>
                </div>
              </div>
              </div>

      </div>

    </motion.div>
  )
}

export default Contact