import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import mesamico from "../../assets/messy bun-amico.svg"
import html from "../../assets/html.jpg"
import css from "../../assets/css.webp"
import javascript from "../../assets/javaseript.webp"
import react from "../../assets/react.svg"
import bootstrap from "../../assets/bootstrap.png"
import tailwind from "../../assets/tailwind.webp"
import sass from "../../assets/sass.png"
import jquary from "../../assets/jquary.png"
import git from "../../assets/github.png"

export default function Aboute(){
        Aos.init()
        return <>
       <section className='py-20  dark:bg-gray-900 dark:text-white overflow-x-hidden'   id='Aboute'>
        <div className='container'>
        <div className='' data-aos="fade-down">
          <div  className='grid  grid-cols-12 gap-5'>
          <div className='col-span-12 md:col-span-5 lg:col-span-5 xl:col-span-5' data-aos="fade-right" >
            <img src={mesamico} className="rounded-xl w-[90%] object-contain h-[400px]" />
          </div>
      <div className='col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-7 flex flex-col justify-center align-center border border-[7px] border-secondry rounded-bl-[90px] px-10 py-5 rounded-tr-[90px] px-5 shadow-2xl dark:border-darksecondry' data-aos="fade-left">
      <h3 className='text-3xl text-bold text-center mb-10 dark:text-darkprimary'>About Me</h3>
        <p>Hello, my name is Aya mohamed farh, and I am a dedicated Front-End Developer with a strong focus on React and JavaScript. I have a passion for creating dynamic and user-friendly web applications that provide an excellent user experience.
      </p>
      
      <p>I am always eager to learn new technologies and stay up-to-date with the latest trends in web development. My goal is to contribute to innovative projects that make a real impact, and I am excited to bring my expertise to new challenges and opportunities.
      Thank you for taking the time to learn a bit about me. I look forward to connecting and discussing how I can contribute to your team.</p>
      
      </div>
      
          </div>
      
      
        </div>
        <div className='my-20'>
          <h3 className='text-3xl text-bold text-center mb-10 dark:text-darkprimary'>Skills</h3>
          <div className='grid grid-cols-12 gap-5 ' data-aos="fade-down">
            <div className='col-span-6 md:col-span-3   flex flex-col justify-center items-center p-4 rounded-xl shadow-2xl border-2 border-primery hover:scale-105 transition-all duration-300 dark:border-darksecondry dark:shadow-darksecondry'>
            <div className='rounded-full overflow-hidden'>
              <img src={html} className='w-20 h-[70px] object-cover' />
            </div>
             <p className=' mt-5'>HTML & HTML5</p>
            </div>
            <div className='col-span-6 md:col-span-3  flex flex-col justify-center items-center p-4 rounded-xl shadow-2xl border-2 border-primery hover:scale-105 transition-all duration-300 dark:border-darksecondry dark:shadow-darksecondry'>
            <div className='rounded-full overflow-hidden'>
              <img src={css} className='w-20 h-[70px] object-cover' />
            </div>
             <p className=' mt-5'>CSS</p>
            </div>
      
            <div className='col-span-6 md:col-span-3  flex flex-col justify-center items-center p-4 rounded-xl shadow-2xl border-2 border-primery hover:scale-105 transition-all duration-300 dark:border-darksecondry dark:shadow-darksecondry'>
            <div className='rounded-full overflow-hidden'>
              <img src={javascript} className='w-20 h-[70px] object-cover' />
            </div>
             <p className=' mt-5'>JavaScript</p>
            </div>
      
            <div className='col-span-6 md:col-span-3  flex flex-col justify-center items-center p-4 rounded-xl shadow-2xl border-2 border-primery hover:scale-105 transition-all duration-300 dark:border-darksecondry dark:shadow-darksecondry'>
            <div className='rounded-full overflow-hidden'>
              <img src={bootstrap} className='w-20 h-[70px] object-cover' />
            </div>
             <p className=' mt-5'>Bootstrap</p>
            </div>
      
      
            <div className='col-span-6 md:col-span-3  flex flex-col justify-center items-center p-4 rounded-xl shadow-2xl border-2 border-primery hover:scale-105 transition-all duration-300 dark:border-darksecondry dark:shadow-darksecondry'>
            <div className='rounded-full overflow-hidden'>
              <img src={tailwind} className='w-20 h-[70px] object-cover' />
            </div>
             <p className=' mt-5'>Tailwind</p>
            </div>
      
       
            <div className='col-span-6 md:col-span-3 flex flex-col justify-center items-center p-4 rounded-xl shadow-2xl border-2 border-primery hover:scale-105 transition-all duration-300 dark:border-darksecondry dark:shadow-darksecondry'>
            <div className='rounded-full overflow-hidden'>
              <img src={sass} className='w-20 h-[70px] object-cover' />
            </div>
             <p className=' mt-5'>Sass</p>
            </div>
      
      
            <div className='col-span-6 md:col-span-3  flex flex-col justify-center items-center p-4 rounded-xl shadow-2xl border-2 border-primery hover:scale-105 transition-all duration-300 dark:border-darksecondry dark:shadow-darksecondry'>
            <div className='rounded-full overflow-hidden'>
              <img src={jquary} className='w-20 h-[70px] object-cover' />
            </div>
             <p className=' mt-5'>jquary</p>
            </div>
      
      
            <div className='col-span-6 md:col-span-3 flex flex-col justify-center items-center p-4 rounded-xl shadow-2xl border-2 border-primery hover:scale-105 transition-all duration-300 dark:border-darksecondry dark:shadow-darksecondry'>
            <div className='rounded-full overflow-hidden'>
              <img src={react} className='w-20 h-[70px] object-cover' />
            </div>
             <p className=' mt-5'>React js</p>
            </div>
      
      
            <div className='col-span-6 md:col-span-3  flex flex-col justify-center items-center p-4 rounded-xl shadow-2xl border-2 border-primery hover:scale-105 transition-all duration-300 dark:border-darksecondry dark:shadow-darksecondry'>
            <div className='rounded-full overflow-hidden'>
              <img src={git} className='w-20 h-[70px] object-cover' />
            </div>
             <p className=' mt-5'>Githup</p>
            </div>
      
          </div>
      
      
        </div>

        </div>
             </section>
        </>
          
}
