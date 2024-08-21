import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function Projects() {
    Aos.init()
  
    return<>
     <section className= "dark:bg-gray-900 dark:text-white bg-[url('/protifo/public/light-patten.svg')] bg-cover py-20 text-center " id='Projects'>
  
     <div className='container'>
     <div   data-aos-easing="linear" data-aos-duration="1400" data-aos="fade-down">
     <h1 className='font-bold text-3xl mb-5'>Projects</h1>
     <p className='mb-5'>Here are some of my projects</p>
     </div>
  
      <div className='grid  grid-cols-12 gap-5'  data-aos="fade-down-right">
      <div  className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3  border border-2 border-secondry shadow-2xl rounded overflow-hidden  hover:rotate-1 transition-all duration-300 dark:border-darkprimary dark:shadow-darksecondry' >
          <img src="/protifo/public/freshcart.png" alt=""  className='w-full h-[200px] object-fill'/>
         <div className='p-5 flex flex-col justify-center'>
         <h3>Freshcart</h3>
         <a href="https://ayafarh.github.io/Freshcart/" className='btn-primary mt-10 d-block hover:bg-red-300 hover:text-black transition-all duration-300 dark:bg-darksecondry'>View</a>
         </div>
        </div>
  
        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border border-2 border-secondry shadow-2xl rounded overflow-hidden  hover:rotate-1 transition-all duration-300 dark:border-darkprimary dark:shadow-darksecondry'  >
          <img src="/protifo/public/meals.png" alt=""  className='w-full h-[200px] object-fill'/>
         <div className='p-5 flex flex-col justify-center'>
         <h3>Meals</h3>
         <a href="https://ayafarh.github.io/meals-project/" className='btn-primary hover:bg-red-300 hover:text-black transition-all duration-300 dark:bg-darksecondry'>View</a>
         </div>
        </div>
   
        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border border-2 border-secondry shadow-2xl rounded overflow-hidden  hover:rotate-1 transition-all duration-300 dark:border-darkprimary dark:shadow-darksecondry'  >
          <img src="/protifo/public/melafy.png" alt=""  className='w-full h-[200px] object-fill '/>
         <div className='p-5 flex flex-col justify-center'>
         <h3>Mealify</h3>
         <a href="https://ayafarh.github.io/mealify/" className='btn-primary hover:bg-red-300 hover:text-black transition-all duration-300 dark:bg-darksecondry'>View</a>
         </div>
        </div>
  
        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border border-2 border-secondry shadow-2xl rounded overflow-hidden  hover:rotate-1 transition-all duration-300 dark:border-darkprimary dark:shadow-darksecondry'>
          <img src="public/menator.png" alt=""  className='w-full h-[200px] object-fill '/>
         <div className='p-5 flex flex-col justify-center'>
         <h3>Menator</h3>
         <a href="https://ayafarh.github.io/my-mentors/" className='btn-primary hover:bg-red-300 hover:text-black transition-all duration-300 dark:bg-darksecondry'>View</a>
         </div>
        </div>
       
  
        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border border-2 border-secondry shadow-2xl rounded overflow-hidden  hover:rotate-1 transition-all duration-300 dark:border-darkprimary dark:shadow-darksecondry'>
          <img src="/protifo/public/popit.png" alt=""  className='w-full h-[200px] object-fill'/>
         <div className='p-5 flex flex-col justify-center'>
         <h3>Popuit</h3>
         <a href="https://ayafarh.github.io/popit/" className='btn-primary hover:bg-red-300 hover:text-black transition-all duration-300 dark:bg-darksecondry'>View</a>
         </div>
        </div>
  
        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border border-2 border-secondry shadow-2xl rounded overflow-hidden  hover:rotate-1 transition-all duration-300 dark:border-darkprimary dark:shadow-darksecondry'>
          <img src="/protifo/public/to-do-ist.png" alt=""  className='w-full h-[200px] object-fill'/>
         <div className='p-5 flex flex-col justify-center'>
         <h3>To do list</h3>
         <a href="https://ayafarh.github.io/to-do-list/" className='btn-primary hover:bg-red-300 hover:text-black transition-all duration-300 dark:bg-darksecondry'>View</a>
         </div>
        </div>
  
        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border border-2 border-secondry shadow-2xl rounded overflow-hidden  hover:rotate-1 transition-all duration-300 dark:border-darkprimary dark:shadow-darksecondry'>
          <img src="/protifo/public/weather.png" alt=""  className='w-full h-[200px] object-fill'/>
         <div className='p-5 flex flex-col justify-center'>
         <h3>Weather</h3>
         <a href="https://ayafarh.github.io/weather/" className='btn-primary hover:bg-red-300 hover:text-black transition-all duration-300 dark:bg-darksecondry'>View</a>
         </div>
        </div>
  
        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border border-2 border-secondry shadow-2xl rounded overflow-hidden hover:rotate-1 transition-all duration-300 dark:border-darkprimary dark:shadow-darksecondry'>
          <img src="/protifo/public/bookmark.png" alt=""  className='w-full h-[200px] object-fill'/>
         <div className='p-5 flex flex-col justify-center'>
         <h3>Bookmark</h3>
         <a href="https://ayafarh.github.io/book-mark/" className='btn-primary hover:bg-red-300 hover:text-black transition-all duration-300 dark:bg-darksecondry'>View</a>
         </div>
        </div>
  
        <div className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border border-2 border-secondry shadow-2xl rounded overflow-hidden hover:rotate-1 transition-all duration-300 dark:border-darkprimary dark:shadow-darksecondry'>
          <img src="/protifo/public/contact list.png" alt=""  className='w-full h-[200px] object-fill'/>
         <div className='p-5 flex flex-col justify-center'>
         <h3>Contact list</h3>
         <a href="https://ayafarh.github.io/contact-list/" className='btn-primary hover:bg-red-300 hover:text-black transition-all duration-300 dark:bg-darksecondry'>View</a>
         </div>
        </div>
  
      </div>
     </div>
     </section>
    </>
}
