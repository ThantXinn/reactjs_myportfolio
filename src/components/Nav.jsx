import React, { useEffect, useState } from 'react';
import { SiXing } from "react-icons/si";
import { hambuger_icon } from '../assets/icons';
import { darklightMode, navLinks } from '../constants';

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
                localStorage.removeItem("theme");
        }
    }, [theme]);
    
  return (
    <header className='fixed border-b padding-x py-8 top-0 z-50 w-full backdrop-blur-md max-lg:py-5'>
          <nav className=' flex justify-between items-center max-container'>
              <div className="flex items-center">
                  <h1 className="flex items-center leading-7 text-3xl font-roboto"><SiXing/>inn</h1>
              </div>
              <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                  {navLinks.map((link) => (
                  <li key={link.label} className='cursor-pointer hover:scale-75 duration-150'>
                          <a href={link.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'
                          >
                            {link.label}      
                        </a>
                  </li>
                  ))}
                <div className='flex justify-center cursor-pointer bg-primary rounded-full'>
                    {darklightMode?.map((item) => (
                        <button onClick={()=>setTheme(item.text)} className={`px-1 rounded-full ${theme === item.text && "bg-blue-200"} duration-200`}>
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
                
              {/* menu side bar for mobile devices */}
              <div className={`hidden max-lg:flex flex-col items-center absolute top-0 right-0 w-2/3 cursor-pointer ${open ? "h-screen" : "w-[100px]"} duration-300 bg-slate-900 dark:bg-slate-50`}>
                    <img
                      onClick={()=>setOpen(!open)}
                      src={hambuger_icon}
                      alt='Hambuger'
                      width={25}
                      height={25}
                      className={`absolute top-5 right-7 ${open? "invert dark:invert-0" : "invert-0 dark:invert"}`}
                      />
                  <ul className={`fixed flex flex-col mt-24 gap-16 justify-center items-center ${open? "w-2/3" : "hidden"}`}>
                      {navLinks.map((link) => (
                        <li id={link.label} className='cursor-pointer hover:scale-75 duration-150'>
                              <a
                                  href={link.href}
                                  className='font-montserrat leading-normal text-slate-gray max-lg:text-xl'
                              >
                                {link.label}      
                            </a>
                        </li>
                      ))}
                        <div className='flex justify-center cursor-pointer bg-primary rounded-full duration-300 '>
                            {darklightMode?.map((item) => (
                                <button onClick={()=>setTheme(item.text)} className={`px-1 rounded-full ${theme===item.text && "bg-blue-200"} duration-200`}>
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
              </div>
          </nav>      
    </header>
  )
}

export default Nav