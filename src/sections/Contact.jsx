import emailjs from '@emailjs/browser'
//import 'dotenv/config'
import React, { useRef, useState } from 'react'
import { send_icon } from '../assets/icons'
import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import { contact_me } from '../constants'

const Contact = () => {

    const [formdata, setFormData] = useState({ first_name: "", last_name: "", user_email: "", phone_no: "", message: "" })
    const handleOnChange = (e) => {
        setFormData({...formdata,[e.target.id]:e.target.value})
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{11}$/;
        const validPhone_no = phoneRegex.test(formdata.phone_no);
        const validEmail = emailRegex.test(formdata.user_email);
        if (formdata.first_name && formdata.last_name && formdata.phone_no && formdata.user_email && formdata.message) {
            
            if (validEmail && validPhone_no)
            {
                emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_PUBLIC_KEY}`)
                .then((result) => {
                    console.log(result.text);
                    setFormData({ first_name: "", last_name: "", user_email: "", phone_no: "", message: "" })
                    window.alert("Thankyou for your message, I will to your message as possible as I can.")
                }, (error) => {
                    console.log(error.text);
                    window.alert("Opps!! Something went wrong.")
                });
            } else {
                window.alert(`"Opps!! your ${!validEmail ? `email: ${formdata.user_email}`: ` phone no : ${formdata.phone_no}`} is something wrong."`)
            }
        } else {
            window.alert("Opps!! Something went wrong.")
        }
  };
    
  return (
      <section id='contact' className='relative padding-x w-full min-h-screen mt-14 max-xl:pt-7'>
        <div className='flex justify-center text-4xl leading-7 font-palanquin mt-24 max-xl:mt-16 max-xl:py-0' >
            <h1>Get in touch</h1>
        </div>
            <div className='flex flex-col justify-center items-center w-full gap-7 p-24 max-xl:px-4'>
                <form onSubmit={sendEmail} className='flex flex-col items-center justify-center -mt-7'>
                    {
                        contact_me.map((item,index) => (
                            <div key={index}>
                                <div className='flex flex-wrap gap-3 max-w-xl'>
                                    <ContactForm
                                        labeltext={`${item.first_name}`} placeholdertext={"first_name"} value={formdata.first_name} onChange={handleOnChange} textarea={false} email={false} ph_number={false}/>
                                    <ContactForm
                                        labeltext={`${item.last_name}`} placeholdertext={"last_name"} value={formdata.last_name} onChange={handleOnChange} textarea={false} email={false} ph_number={false}/>
                                    <ContactForm
                                        labeltext={`${item.user_email}`} placeholdertext={"user_email"} value={formdata.user_email} onChange={handleOnChange} textarea={false} email={true} ph_number={false}/>
                                    <ContactForm
                                        labeltext={`${item.phone_no}`} placeholdertext={"phone_no"} onChange={handleOnChange} value={formdata.phone_no} textarea={false} email={false} ph_number={true}/>
                                </div>
                                <div className='mt-3 max-w-xl w-full'>
                                    <ContactForm
                                        labeltext={`${item.message}`} placeholdertext={"message"} value={formdata.message} onChange={handleOnChange} textarea email={false} ph_number={false}/>
                                </div>
                            </div>
                        ))
                    }
                    <div className='mt-3 flex max-w-xl items-center justify-center w-2/5'>  
                      <Button icon={`${send_icon}`} btntext={"Send"} backgroundcolor='bg-coral-blue' onClick={console.log()} />
                    </div>
                </form>
            </div>
    </section>
  )
}

export default Contact