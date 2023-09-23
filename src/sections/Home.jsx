import React from 'react'
import { hero_icon, paint_bg } from '../assets/images'

const Home = () => {
  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-full max-container pt-32'>
        <div className='relative flex justify-evenly items-center gap-7 w-full max-md:flex-col-reverse'>
          <div className='flex flex-col items-center max-md:py-5 w-2/3 max-sm:w-full'>
            <div className='flex max-sm:items-center'>
              <h1 className='flex p-5 text-2xl leading-7 font-roboto max-md:text-lg flex-wrap'>
                  Hello! My name is
                  <span className='text-center text-4xl text-coral-red max-md:text-2xl'>
                    <br></br>Thant Zin
                  </span>    
              </h1>
            </div>
            <div>
              <p className='text-start font-palanquin text-xl leading-7 tracking-wide max-md:text-center'>
                I am working as <br></br>Freelance Frontend Web Designer and Photographer.<br></br>
                Currently, I work on web application design using technologies like React, Tailwind, Next JS and<br></br>
                I love to Design and create new web experiences for the people.
              </p>
            </div>
            <div className='flex items-center mt-12 max-lg:mt-7'>
              <button className='p-4 rounded-full bg-coral-red text-lg text-white'>
                Download CV
              </button>
            </div> 
          </div> 
          <div className={`flex justify-center items-center py-16 max-lg:py-0 max-md:scale-90`}>
                <img
                    src={hero_icon}
                    width={300}
                    height={300}
                    className='aspect-square rounded-full object-cover object-center'  
                  />
                  
                  <img
                    src={paint_bg}
                    width={300}
                    height={300}
                    className='absolute rounded-full object-cover object-center border-[2px]'   
                />
          </div>  
        </div>      
    </section>
  )
}

export default Home