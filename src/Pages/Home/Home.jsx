import React from 'react';
import { Typed } from 'react-typed';
import ReactTypingEffect from 'react-typing-effect';

export default function Home() {
  return (
    <>
      <section className='w-full bg-black  relative'>
        <div className="min-h-screen  " id='home'>
          <div className=" absolute w-full h-screen bg-[url('/7784Ke0EF5.jpeg')] bg-cover bg-center min-w-full bg-no-repeat  z-0">
          <div className='absolute w-full h-screen bg-black opacity-60'></div>
          </div>
          <div className="  absolute w-full z-10 h-screen text-white pt-1/2 flex flex-col justify-center items-center">
          <h1 className='text-2xl md:text-5xl text-white font-bold mb-5'>
            <span>Hi,I am  Aya farh</span>
           
          </h1>
            <p className='mb-5 text-xl'>   <ReactTypingEffect
              text={['Front-End Developer React js']}
              speed={100}
              eraseDelay={1000}
              typingDelay={100}
            /></p>
            <div className='flex gap-5 text-xl'>
              <a href="https://www.linkedin.com/in/aya-mohamed-farh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="fa-brands fa-linkedin hover:text-primary transition-all duration-300"></i>
              </a>
              <a href="https://github.com/AyaFarh">
                <i className="fa-brands fa-github hover:text-primary transition-all duration-300"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-twitter hover:text-primary transition-all duration-300"></i>
              </a>
            </div>
          </div>


          <div>
            <img src='' alt='' className=''/>
          </div>
        </div>
      </section>
    </>
  );
}
