import React, { useState } from 'react'

export default function Navbar() {


 let [isVisable,setisVisable] = useState(true)
  const toggleVisable = ()=>{
    setisVisable(!isVisable)
  }
  const toggleClass = (e)=>{
    const screenWidth = window.innerWidth;
    if (screenWidth < 768 && (e.target.tagName === 'LI' || e.target.tagName === 'A')){
      setisVisable(!isVisable);
    }
    
  }

  function darkmoodclass(){
    let htmlElement =document.documentElement;
    htmlElement.classList.toggle('dark') 
  }
  return <>
  <nav className='bg-secondry fixed top-0 left-0 right-0 z-10  z-20 shadow-xl dark:bg-darkprimary dark:text-light'>
<div className='w-full  container '>
   <div className='md:flex block justify-between items-center'>
  <div className='flex items-center justify-between w-full'>
  <h1 className='cursor-pointer font-bold text-xl'>Aya Folio</h1>
  <i className="fa-solid fa-bars py-2 px-3 text-3xl  rounded-lg text-black cursor-pointer md:opacity-0 opacity-1 "   aria-label="Toggle Menu" onClick={toggleVisable}> </i>
  </div>
   {isVisable && ( <ul className='md:flex block  items-center justify-center p-1'  onClick={toggleClass}>
        <li className='p-3 px-8' ><a href="#home"  className={({isActive})=>{return `before:h-[2px] before:bg-red-300 relative before:absolute before:left-0 before:-bottom-2 hover:before:w-full before:transition-[width]
          hover:font-bold before:duration-300 dark:before:bg-black
          ${isActive ? 'font-bold before:w-full  dark:before:bg-black' :""}`}}>Home</a></li>
        <li className='p-3 px-8' ><a href="#Aboute"  className={({isActive})=>{return `before:h-[2px] before:bg-red-300 relative before:absolute before:left-0 before:-bottom-2 hover:before:w-full before:transition-[width]
          hover:font-bold before:duration-300 dark:before:bg-black
          ${isActive ? 'font-bold before:w-full dark:before:bg-black' :""}`}}>Aboute</a></li>
        <li className='p-3 px-8' ><a href="#Projects" className={({isActive})=>{return `before:h-[2px] before:bg-red-300 relative before:absolute before:left-0 before:-bottom-2 hover:before:w-full before:transition-[width]
          hover:font-bold before:duration-300 dark:before:bg-black
          ${isActive ? 'font-bold before:w-full dark:before:bg-black' :""}`}}>Projects</a></li>
        <li className='p-3 px-8' ><a href="#Contact" className={({isActive})=>{return `before:h-[2px] before:bg-red-300 relative before:absolute before:left-0 before:-bottom-2 hover:before:w-full before:transition-[width]
          hover:font-bold before:duration-300 dark:before:bg-black
          ${isActive ? 'font-bold before:w-full dark:before:bg-black' :""}`}}>Contact</a></li>

          <li>
            <button className='text-xl pl-10' onClick={darkmoodclass}>
            <i className="fa-regular fa-moon "></i>
            </button>
          </li>
       
    </ul>)}
</div>
</div>
  </nav>
  
  </>
}
