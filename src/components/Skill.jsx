import { motion } from 'framer-motion';
import React from 'react';
import { easeInVariants } from '../animations/Variants';
import { skills } from '../constants';


const Skill = () => {
    const { my_skills } = skills;
  return (
    <div className='min-h-1/2 mt-12'>
          <div className='max-container py-10'>
            <motion.div
              variants={easeInVariants}
              initial="hidden"
              whileInView="visible"
              className='flex flex-col w-full text-center font-palanquin mb-10' >
                <h1 className='text-4xl leading-10 py-3'>{my_skills.title}</h1>
                <h2 className='text-xl mt-3'>{my_skills.subtitle}</h2>
              </motion.div>
            <div 
                className='flex flex-wrap justify-center gap-3'>
                  {
                      skills.my_skills.contents.map((item, i) => (
                        <motion.div key={i}
                            initial={{ opacity: 0,scale:0 }}
                            whileInView={{ opacity: 1,scale:1 }}
                            transition={{type:"spring",ease:"easeIn",duration:1.5,delay:0.5 * i}}
                            className='flex gap-4 group relative items-center w-full h-30 p-7 rounded-md border-2 max-w-xs opacity-80 bg-transparent max-xl:h-24 border-slate-300 dark:border-slate-100 dark:bg-blue-950'>
                            <div
                              key={i}
                                      style={{
                                          background:`conic-gradient(rgb(8,145,170) ${item.percentage}%,#ddd ${item.percentage}%)`
                                      }}
                                      className='w-20 h-20 flex items-center justify-center rounded-full max-xl:h-16 max-xl:w-16'>
                                      
                                    <div className='flex justify-center items-center w-16 h-16 bg-white rounded-full max-xl:h-14 max-xl:w-14'>
                                        <img src={ item.icon} alt='...' className='scale-50 w-20 group-hover:scale-75 duration-200' />
                                    </div>
                                  </div>
                                  <div>
                                      <h5 className='text-xl font-raleway'>{item.name}</h5>
                                      <p className='font-palanquin'>{ item.knowledge}</p>
                                  </div>
                            </motion.div>
                      ))
                  }
              </div>
        </div> 
    </div>
  )
}

export default Skill