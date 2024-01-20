import React from 'react';

const ContactForm = ({ labeltext, placeholdertext, textarea,onChange,value,ph_number,email }) => {
  
  return (
    
    <div className='flex flex-col gap-2 flex-1 w-full'>
          <label htmlFor={placeholdertext} className=' text-base font-palanquin sm:text-lg'>
              {labeltext}
          </label> 
          {
              textarea ? (
                  <textarea
                      id={placeholdertext}
                      rows={9}
                      name={placeholdertext}
                      placeholder={labeltext}
                      value={value}
                      onChange={onChange}
                      className='rounded-md px-2 py-3 text-base resize-none outline-none border-2 bg-slate-300 focus:border-cyan-600 sm:text-lg text-black'>  
                </textarea>
              ) : (
                    <input
                          type={`${ph_number} ? 'number' : 'text'` || `${email} ? 'email' : 'text'`}
                          id={placeholdertext}
                          name={ placeholdertext}
                          placeholder={labeltext}
                          value={value}
                          onChange={onChange}
                          autoComplete='off'
                          className='rounded-md p-2 text-base outline-none border-2 focus:border-cyan-600 bg-slate-300 sm:text-lg text-black' />
                  )
          }
    </div>
  )
}

export default ContactForm