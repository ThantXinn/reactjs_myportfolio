import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects_creations } from '../constants';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import { motion } from 'framer-motion';
import { easeInVariants, fadeInLeftVariants } from '../animations/Variants';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectCard = () => {
    const { projects } = projects_creations;
  return (
      <div className='flex flex-col w-full items-center justify-center max-lg:py-20'>
          <motion.div
              variants={easeInVariants}
              initial="hidden"
              whileInView="visible"
              className='flex flex-col justify-center items-center gap-4'>
              <h1 className='max-lg:text-xl text-3xl font-palanquin'>{projects.title}</h1>
              <h1 className='max-lg:text-2xl text-4xl font-raleway'>{projects.subtitle}</h1>
          </motion.div>
          <motion.div
              variants={fadeInLeftVariants}
              initial="hidden"
              whileInView="visible"
              className='flex items-center w-4/5 max-lg:w-full'>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                >
                    {
                        projects.content.map((item,index) => {
                            return(
                            <SwiperSlide key={index} className='flex justify-center'> 
                                <div className='relative flex flex-col justify-center items-center w-3/4 padding p-7 max-lg:w-4/5 gap-1'>
                                    <div>
                                         <h1 className='max-lg:text-xl text-3xl font-raleway'>{item.title}</h1>   
                                    </div> 
                                    <div className='relative flex justify-center w-full group'>
                                            <div className='w-full p-7 opacity-100 border-2 border-slate-300 rounded max-lg:p-2'>
                                                <img
                                                    src={item.imgUrl}
                                                    className='border  group-hover:opacity-50 group-hover:scale-105 duration-300'
                                                />
                                            </div>  
                                            <div
                                                className='font-roboto absolute opacity-0 translate-y-1/2 gap-2 bottom-5 max-lg:bottom-2 px-2 max-lg:text-xs rounded-full bg-transparent group-hover:translate-y-0 group-hover:opacity-100 duration-300 w-52 h-12 max-sm:w-32 max-sm:h-8 group-hover:animate-bounce cursor-pointer'>
                                                <a href={item.href}
                                                    target='_blank' rel='noreferrer'
                                                    >
                                                    <div className='flex flex-col items-center gap-1'>
                                                        <h1>{item.name}</h1>
                                                        <div className='flex items-center justify-center rounded-md gap-1 h-8 w-20 bg-slate-600'>
                                                            Demo<FaExternalLinkAlt/>
                                                        </div>
                                                    </div>
                                                </a>
                                        </div>
                                    </div>   
                                </div>
                            </SwiperSlide>
                          )}
                    )}
                  </Swiper>
          </motion.div>
      </div>
  )
}

export default ProjectCard