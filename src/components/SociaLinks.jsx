import React from 'react'
import { BiLogoGmail } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SociaLinks = () => {
    const my_sociallinks = [
        {
            id: 1,
            my_social: (
                <>
                    LinkedInd<FaLinkedin/>
                </>
            ),
            href: 'https://www.linkedin.com',
        },
        {
            id: 2,
            my_social: (
                <>
                    GitHub<FaGithub/>
                </>
            ),
            href: 'https://github.com/ThantXinn',
        },
        {
            id: 3,
            my_social: (
                <>
                    Email<BiLogoGmail/>
                </>
            ),
            href: 'mailto:thantzin626@gmail.com',
        },
    ]

  return (
      <div className='flex-col top-[38%] left-0 fixed'>
          <ul>
              {my_sociallinks.map((item) =>
              <li key={item.id} className='hidden lg:flex justify-between items-center dark:bg-white bg-slate-900 w-36 h-12 px-4 rounded-tr-md rounded-br-md ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
                  <a href={item.href} className='flex justify-between items-center w-full text-white dark:text-black' target="_blank" rel='noreferrer'>
                          {item.my_social}
                  </a>
              </li>
              )}
          </ul>
    </div>
  )
}

export default SociaLinks