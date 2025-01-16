import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import freshcart from  "../../assets/freshcart.png"
import foodapp from  "../../assets/meals.png"
import melafy from "../../assets/melafy.png"
import mentor from "../../assets/menator.png"
import popit from "../../assets/popit.png"
import todo  from "../../assets/to-do-ist.png"
import weather  from "../../assets/weather.png"
import contact  from "../../assets/contact list.png"
import bookmark  from "../../assets/bookmark.png"
import headphone  from "../../assets/Headphone - Google Chrome 12_2_2024 3_43_02 PM.png"
import eslam from "../../assets/Eslam - Google Chrome 1_16_2025 2_39_19 PM.png"
import  dotcode from "../../assets/DOTCODE.png"
import fashion from "../../assets/fashion.png"

export default function Projects() {


    Aos.init()

    const projectDetails = [
      {
        image: freshcart,
        title: "Freshcart",
        link: "https://ayafarh.github.io/Freshcart/",},
      {
        image: foodapp,
        title: "Food App",
        link: "https://ayafarh.github.io/foodapp/",},
        {
          image: dotcode ,
          title: "Dot code",
          link: "https://dot-code.vercel.app/",
        },
        {
          image: fashion ,
          title: "fashion app",
          link: "https://e-commerce-fashion-16.vercel.app/",
        },
        {
          image:eslam ,
          title: "protifolio",
          link: "https://eslam-fqng.vercel.app",
        },
      {
        image: melafy,
        title: "Melafy",
        link: "https://ayafarh.github.io/melafy/",},
      {
        image: mentor,  
        title: "Mentor",
        link: "https://ayafarh.github.io/my-mentors/",},
      {
        image: popit,
        title: "Popit",
        link: "https://ayafarh.github.io/popit/"},
      {
        image: todo,
        title: "To Do List",
        link: "https://ayafarh.github.io/to-do-list/",},
      {
        image: weather,
        title: "Weather App",
        link: "https://ayafarh.github.io/Weather-App/",},
      {
        image: contact,
        title: "Contact List",
        link: "https://ayafarh.github.io/Contact-List/",},
      {
        image: bookmark,
        title: "Bookmark",
        link: "https://ayafarh.github.io/Bookmark/",},
        {
          image: headphone,
          title: "Headphone",
          link: "https://ayafarh.github.io/Headphone/", 
        }

    ]
  
    return<>
     <section className= "dark:bg-gray-900 dark:text-white py-10 text-center " id='Projects'>
  
     <div className='container'>
     <div   data-aos-easing="linear" data-aos-duration="1400" data-aos="fade-down">
     <h1 className='font-bold text-3xl mb-5'>Projects</h1>
     <p className='mb-5'>Here are some of my projects</p>
     </div>
  
      <div className='grid  grid-cols-12 gap-5'  data-aos="fade-down-right">
     {projectDetails.map((project)=> {
       return(
        <div  className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border-2 border-secondry shadow-2xl rounded overflow-hidden  hover:rotate-1 transition-all duration-300 dark:border-darkprimary dark:shadow-darksecondry' >
        <img src={project.image} alt=""  className='w-full h-[200px] object-fill'/>
       <div className=' flex flex-col justify-center'>
       <h3 className='pt-2'>{project.title}</h3>
       <a href={project.link} className='btn-primary mt-5  w-1/3 py-4 m-auto rounded-t-3xl rounded-b-none hover:bg-red-300 hover:text-black transition-all duration-300 dark:bg-darksecondry'>View</a>
       </div>
      </div>

       )
     })}
  
       


       
       
  
        
       
  
       
  
       
  
       
  
  
       
  
      </div>
     </div>
     </section>
    </>
}
