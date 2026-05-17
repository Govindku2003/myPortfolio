import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { certifications } from './certificate'

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const closeModal = () => setSelectedCert(null)

  return (
    <motion.div
     initial={{opacity:0,y:50}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:0.5,ease:'easeInOut'}}
             viewport={{once:false , amount:0.2}}
             id='certification'
             className='scroll-mt-24 py-20 bg-dark-1000 px-4 md:px-12'
    >


        <div className=' container mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-4'> My <span className='text-yellow-400'> Certification</span></h2>
          <p className='text-center'> Completed Training and Certification </p>
        </div>

        <div>
        
    <div className="bg-dark-900 text-white px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">
                {cert.title}
              </h2>

              <p className=" text-sm mb-4">
                {cert.description}
              </p>

              <button
                type="button"
                onClick={() => setSelectedCert(cert)}
                className="inline-block bg-green-800 hover:bg-green-600 font-medium px-4 py-2 rounded-lg"
              >
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

        </div>

      {selectedCert && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-dark-900"
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 text-white text-3xl leading-none"
            >
              ×
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full max-h-[80vh] object-contain bg-black"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {selectedCert.title}
              </h3>
              <p className="text-gray-400">{selectedCert.description}</p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default Certification