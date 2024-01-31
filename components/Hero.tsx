import React from 'react'
import Particle from './Particle.'
import TextEffect from './TextEffect'

function Hero() {
  return (
      <div className="h-[88vh] bg-[url('/images/bg2.jpg')] bg-cover bg-center">
          <Particle/>  
          <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
            <div>
              <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                HI, I'M <span className='text-yellow-400'>AHAMED AFRI!</span>
              </h1>
              <TextEffect/>
            </div> 
            <div>

            </div>
          </div>
      </div>
  )
}

export default Hero