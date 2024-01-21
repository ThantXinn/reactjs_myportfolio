import { motion } from 'framer-motion'
import React from 'react'
import { easeInVariants, fadeInLeftVariants } from '../animations/Variants'
import { download_icon } from '../assets/icons'
import { hero_icon, paint_bg } from '../assets/images'
import Button from '../components/Button'

const Home = () => {
  return (
    <section id='home' className='w-full flex flex-col max-container justify-center items-center h-2/4 pt-28 mt-10 border-b dark:border-b-slate-50 border-b-slate-700 xl:flex-row xl:min-h-screen '>
      <div className='w-full flex justify-center items-center mx-7 gap-7 max-lg:gap-2 max-lg:flex-col-reverse max-lg:px-0'
      >
        <motion.div
          variants={fadeInLeftVariants}
          initial="hidden"
          whileInView="visible"
          className='flex flex-col items-center w-2/5 max-md:p-5 max-lg:w-full'>
          <div className='flex max-sm:items-center'>
            <h1 className='flex p-5 text-2xl leading-7 font-roboto max-md:text-lg flex-wrap'>
              Hello! My name is
              <span className='text-center text-4xl text-coral-red max-md:text-2xl'>
              <br></br>Thant Zin
              </span>    
            </h1>
            </div>
            <div className='flex w-full'>
              <p className='text-center font-palanquin text-xl leading-7 tracking-wide max-md:text-center'>
                I am a junior front-end developer with a passion for creating beautiful and dynamic web applications. I`ve embarked on an exciting journey, gaining valuable experience though freelance projects.
              </p>    
            </div>
            <div className='flex items-center mt-12 max-lg:mt-7 mb-10'>
              <Button btntext={"Download CV"} icon={ `${download_icon}`} backgroundcolor={""} onClick={console.log()} />
            </div> 
        </motion.div>  
        <motion.div
          variants={easeInVariants}
          initial="hidden"
          whileInView="visible"
          className={`relative flex justify-center items-center py-16 max-lg:py-5`}>
          <img
            src={hero_icon}
            className='aspect-square rounded-full object-cover object-center w-[330px] max-xl:w-[220px]'  
          />
                  
          <img
            src={paint_bg}
            className='absolute aspect-square rounded-full object-cover object-center w-[330px] max-xl:w-[220px] border-[2px]'   
          />
        </motion.div>  
      </div> 
    </section>
  )
}

export default Home