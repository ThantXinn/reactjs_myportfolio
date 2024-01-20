import { motion } from 'framer-motion'
import React from 'react'
import { easeInVariants, fadeInLeftVariants, fadeInRightVariants } from '../animations/Variants'
import { about_me } from '../assets/images'
import Skill from '../components/Skill'

const About = () => {
  return (
      <section id='about' className=' flex flex-col w-full min-h-screen padding max-lg:padding-y border-b dark:border-b-slate-50 border-b-slate-700 max-container'>
      <motion.div
        variants={easeInVariants}
        initial="hidden"
        whileInView="visible"
        className='flex justify-center flex-col items-center mb-10 py-5'>
        <h1
          className='text-4xl font-palanquin'>
            About Me
        </h1>
        <div className='py-3'>      
          <h4>
            My Introduction
          </h4>  
        </div>
      </motion.div>
      <div className='flex justify-center items-center mx-7 gap-4 max-lg:gap-2 max-lg:flex-col max-lg:px-0'>
        <motion.div
          variants={fadeInLeftVariants}
          initial="hidden"
          whileInView="visible"
          className='flex justify-center w-5/12 px-7 border-[2px] border-slate-300 dark:border-slate-100 rounded-tr-3xl rounded-bl-3xl max-lg:w-3/4 max-sm:w-full max-lg:px-0'>
            <img src={about_me}
              width={380}
              height={300}
              className='aspect-square rounded-tr-3xl rounded-bl-3xl object-cover object-top scale-75 hover:opacity-80 cursor-pointer' 
            />
        </motion.div>
        <motion.div
          variants={fadeInRightVariants}
          initial="hidden"
          whileInView="visible"
          className='flex justify-center items-center w-2/4 p-7 max-lg:w-full max-lg:px-0'>
            <p className='text-start font-palanquin text-xl leading-7 tracking-wide max-lg:text-center'>
              Currently, I am working as <br></br>Freelance Frontend Web Designer.<br></br>I love to create user-friendly websites and web application using technologies like <span className='text-coral-red italic'>React, Tailwind, MUI, Next Js, Redux, Postgresql, Stripe</span> and<br></br>
              I love to Design and create new web experiences for the people.
            </p>
        </motion.div>
      </div>
      <Skill/>
    </section>
  )
}

export default About