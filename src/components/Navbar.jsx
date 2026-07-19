import React, { useState } from 'react'

import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {

  const[showMenu, setShowMenu] = useState(false);


  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm md:py-4 md:px-8 shadow-lg ">
      <div className='container flex justify-between items-center mx-auto'>
        <div>
          <a href="#" className='inline-flex items-center gap-2 text-3xl font-bold text-white'>
            <span>G</span>
            <span className='text-yellow-300'>KK</span>
          </a>
        </div>
        <div  className='hidden md:flex space-x-10'>
          <a href="#home" className='relative text-white/80 transition duration-200 hover:text-yellow-300  group '>
          <span >Home</span>
          <span className='absolute left-0 bottom-1  w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full '></span>
          </a>
           <a href="#about" className='relative text-white/80 transition duration-200 hover:text-yellow-300 active:text-yellow-300 focus:text-yellow-300 group cursor-pointer'>
          <span>About</span>
          <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full hover:w-full group-active:w-full group-focus:w-full'></span>
          </a>
           <a href="#skills" className='relative text-white/80 transition duration-200 hover:text-yellow-300  group '>
          <span >Skills</span>
          <span className='absolute left-0 bottom-1  w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full '></span>
          </a>
           <a href="#projects" className='relative text-white/80 transition duration-200 hover:text-yellow-300  group '>
          <span > Projects</span>
          <span className='absolute left-0 bottom-1  w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full '></span>
          </a>
           <a href="#certification" className='relative text-white/80 transition duration-200 hover:text-yellow-300  group '>
          <span >Certification</span>
          <span className='absolute left-0 bottom-1 w-0 h-0.5 bg-green-400 transition-all duration-200 group-hover:w-full hover:w-full'></span>
          </a>

           <a href="#contacts" className='relative text-white/80 transition duration-200 hover:text-yellow-300  group '>
          <span >Contacts</span>
          <span className='absolute left-0 bottom-1  w-0 h-0.5 bg-green-200 transition-all duration-200 group-hover:w-full '></span>
          </a>
          
          </div>
          {/* Mobile Botton */}
          <div className='md:hidden '>

            {
              showMenu ? <FaXmark onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' /> : <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl cursor-pointer' />
            }



            
            
            </div>
          
      </div>


      {/* mobile menues */}

      {
        showMenu && (

          <div  className='md:hidden font-bold mt-4 bg-dark-300 h-screen rounded-lg p-4 flex  flex-col space-y-4 text-center justify-center'>

            <a  onClick={() => setShowMenu(!showMenu)} href="#home" className='relative text-white/80 transition duration-200 hover:text-yellow-300 group '>
          <span>Home</span>
          
          
          </a>

           <a href="#about"  onClick={() => setShowMenu(!showMenu)} className='relative text-white/80 transition duration-200 hover:text-yellow-300 group '>
          <span>About</span>
          
          </a>

           <a href="#Skills" onClick={() => setShowMenu(!showMenu)} className='relative text-white/80 transition duration-200 hover:text-yellow-300 group'>
          <span>Skills</span>
          
          </a>

           <a href="#projects" onClick={() => setShowMenu(!showMenu)} className='relative text-white/80 transition duration-200 hover:text-yellow-300 group '>
          <span>Projects</span>
          
          </a>

           <a href="#certification" onClick={() => setShowMenu(!showMenu)} className='relative text-white/80 transition duration-200 hover:text-yellow-300 group '>
          <span>Certification</span>
         
          </a>

           <a href="#contacts" onClick={() => setShowMenu(!showMenu)} className='relative text-white/80 transition duration-200 hover:text-yellow-300 group '>
          <span>Contacts</span>
          
          </a>
            
          </div>
        )
      }
    </nav>

  )
}

export default Navbar
