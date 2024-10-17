import React, { useRef, useState } from 'react'
import Lottie from 'lottie-react';
import animationData from "../../../public/Animation - 1723139800218 (1).json"
import Aos from 'aos';
 import 'aos/dist/aos.css'
 import emailjs from '@emailjs/browser';

export default function Contact() {
    let [name,setname] = useState("");
    let [email,setemail] = useState("");
    let [message,setmessage] = useState("");
     Aos.init()


     const form = useRef();

     const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          'service_dot3m3h', // Service ID
          'template_56rw4zr', // Template ID
          form.current, // Form reference
          'Km-Th0oMJdi_5FUc8' // Public Key (User ID)
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.text);
            setname("");     
            setmessage(""); 
            setemail(""); 
            form.current.reset()
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    };
     
 
      return <>
      <section className='dark:bg-gray-900 dark:text-white py-20  grid grid-cols-12 gap-5 ' id='Contact' >
      <div className='container col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 ' >
           <div className='flex flex-col justify-center items-center '>
           <Lottie animationData={animationData}/>
    
           <div className='flex justify-center align-center  w-full gap-5'>
           <div>
      <h3><i className="fa-solid fa-phone text-primery dark:text-darkprimary"></i> Call me</h3>
      <p>+201019623279</p>
    </div>
    
    <div>
      <h3><i className="fa-solid fa-envelope text-primery dark:text-darkprimary"></i> Email</h3>
      <p>farhaya004@gmail.com</p>
    </div>
           </div>
    
           </div>
        </div>
    
    
        <div className=' col-span-12 md:col-span-5 lg:col-span-5 xl:col-span-5 shadow-2xl rounded p-5 dark:bg-darkprimary' data-aos="fade-right">
            <h3 className='font-bold text-3xl mb-5 text-center dark:text-darksecondry'>Get In Touch</h3>
            <form className='flex flex-col jestify-center align-center text-black' ref={form} onSubmit={sendEmail}>
                <input type="text"  placeholder='Your Name' value={name}  name="user_name" className='form-control' onChange={(e)=>setname(e.target.value)} required/>
                <input type="email"  placeholder='Your Email' value={email} name="user_email" className='form-control' onChange={(e)=>setemail(e.target.value)} required/>
                <textarea placeholder='Your Message' rows="10" value={message}  name="message" className='form-control' onChange={(e)=>setmessage(e.target.value)} required></textarea>
                <button type='submit'  className='btn-primary text-center w-[50%] m-auto mt-10 hover:bg-red-300 hover:text-black transition-all duration-300 dark:bg-darksecondry'>Send <i className="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>
       
      </section>
    
     
      </>
}
