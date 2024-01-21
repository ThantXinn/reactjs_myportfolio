import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { SiXing } from "react-icons/si";
import { close_icon, hambuger_icon } from '../assets/icons';
import { darklightMode, navLinks } from '../constants';
import SociaLinks from './SociaLinks';

const Nav = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"));
    const [open, setOpen] = useState(false);
    const ele = document.documentElement;

    function checkScroll() {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "scroll";
        }
    }
    checkScroll();

    useEffect(() => {
        switch (theme) {
            case "dark-mode":
                ele.classList.add("dark");
                localStorage.setItem("theme", "dark-mode");
                break;
            case "light-mode":
                ele.classList.remove("dark");
                localStorage.setItem("theme", "light-mode");
                break;
            default:
                localStorage.removeItem("theme")
        }
    }, [theme]);
    
  return (
    <header className='fixed border-b padding-x py-8 bg-slate-700 top-0 z-50 w-full backdrop-blur-md max-lg:py-5'>
          <nav className='flex justify-between items-center max-container'>
              <motion.div
                  initial={{ opacity:0 }}
                  animate={{ opacity:1 }}
                  transition={{duration:1,delay:.5}}
                  className="flex items-center">
                  <h1 className="flex items-center leading-7 text-3xl font-roboto"><SiXing/>inn</h1>
              </motion.div>
              <motion.ul
                  initial={{ y: '-100vh' }}
                  animate={{ y: 0 }}
                  transition={{duration:1,delay:.5}}
                  className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                  {navLinks.map((link,index) => (
                  <li key={index} className='cursor-pointer hover:scale-75 duration-150'>
                          <a href={link.href}
                            className='font-montserrat leading-normal text-lg text-slate-300'
                          >
                            {link.label}      
                        </a>
                  </li>
                  ))}
                <div className='flex justify-center cursor-pointer bg-primary rounded-full'>
                    {darklightMode?.map((item,index) => (
                        <button key={index} id='btn_dark_toggle' onClick={()=>setTheme(item.text)} className={`px-1 rounded-full ${theme === item.text && "bg-blue-200"} duration-200`}>
                            <img
                                src={item.src}
                                alt={item.alt}
                                width={24}
                                height={24}
                            />
                        </button>
                    ))}
                </div>
              </motion.ul>
                
              {/* menu side bar for mobile devices */}
              <div className={`hidden max-lg:flex flex-col items-center absolute top-0 right-0 w-2/3 cursor-pointer ${open ? "h-screen" : "w-[100px]"} duration-300 bg-slate-900 dark:bg-slate-50`}>
                  <motion.img
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{duration:1,delay:0.5}}
                      onClick={() => setOpen(!open)}
                      src= {`${ !open? hambuger_icon: close_icon}`}
                      alt='Hambuger_Close'
                      width={25}
                      height={25}
                      className={`absolute top-5 right-7 duration-300 ${open? "invert dark:invert-0" : "invert-0 dark:invert "}`}
                      />
                  <ul
                      className={`fixed flex flex-col mt-24 gap-16 justify-center items-center ${open ? "w-2/3" : "hidden"}`}>
                      {navLinks.map((link,index) => (
                          <li
                              key={index}
                              id={link.label}
                              className='cursor-pointer hover:scale-75 duration-150'>
                              <a
                                  href={link.href}
                                  className='font-montserrat leading-normal text-slate-gray max-lg:text-xl'
                              >
                                {link.label}      
                            </a>
                        </li>
                      ))}
                        <div id='nav_container' className='flex justify-center cursor-pointer bg-primary rounded-full duration-300 '>
                            {darklightMode?.map((item,index) => (
                                <button key={index} id='btn_id' onClick={()=>setTheme(item.text)} className={`px-1 rounded-full ${theme===item.text && "bg-blue-200"} duration-200`}>
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        width={24}
                                        height={24}
                                    />
                                </button>
                            ))}
                        </div>
                  </ul>
                    <div className={` ${open ? "flex":"hidden" } absolute bottom-[25%] w-full h-[12%]`}>
                        <SociaLinks/>
                    </div>
              </div>
          </nav>      
    </header>
  )
}

export default Nav