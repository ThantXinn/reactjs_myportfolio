import React from 'react'

const Button = ({ icon, backgroundcolor, btntext,onClick }) => {
  
  return (
    <button
          className={
              `flex justify-center items-center w-full p-4 rounded-full text-lg text-white 
              ${backgroundcolor? `${backgroundcolor}` : 'bg-coral-red '} hover:scale-90 duration-150 hover:cursor-pointer`
          }
          onClick={onClick}
      >
      {btntext}
      {icon &&
        <img
        src={icon}
        style={{ width: 15, height: 15 }}
        className='ml-3 invert'
        />
      }
    </button>
  )
}

export default Button