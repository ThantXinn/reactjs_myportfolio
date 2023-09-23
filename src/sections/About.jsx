import React from 'react'
import { about_me } from '../assets/images'

const About = () => {
  return (
      <section id='about' className='flex flex-col justify-center w-full pt-28 max-lg:max-container'>
          <div className='flex justify-center flex-col items-center mb-7 mt-3'>
            <h1 className='text-4xl font-palanquin'>
                About Me
              </h1>
              <div>      
                <h4>
                    My Introduction
                </h4>  
              </div>
          </div>
          <div className='flex justify-center mx-7 px-12 gap-4 max-lg:gap-2 max-lg:flex-col items-center max-lg:px-2'>
            <div className='flex justify-center w-5/12 px-7 border-[2px] border-slate-300 dark:border-slate-100 rounded-tr-3xl rounded-bl-3xl max-lg:w-4/5'>
                <img src={about_me}
                    width={380}
                    height={300}
                    className='aspect-square rounded-tr-3xl rounded-bl-3xl object-cover object-top scale-75 hover:opacity-80 cursor-pointer' 
                />
            </div>
            <div className='flex justify-center items-center w-2/4 p-7 max-lg:w-full max-lg:p-3'>
                <p className='text-start font-palanquin text-xl leading-7 tracking-wide max-lg:text-center'>
                I am working as <br></br>Freelance Frontend Web Designer.<br></br>
                Currently, I work on web application design using technologies like React, Tailwind, Next JS and<br></br>
                I love to Design and create new web experiences for the people.
              </p>
            </div>
          </div>
    </section>
  )
}

export default About