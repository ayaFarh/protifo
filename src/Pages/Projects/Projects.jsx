
import Aos from 'aos';
import 'aos/dist/aos.css'
import salla from '../../assets/Salla - Google Chrome 5_16_2025 11_25_33 PM.png'
import foodapp from  "../../assets/meals.png"
import melafy from "../../assets/melafy.png"
import mentor from "../../assets/menator.png"
import popit from "../../assets/popit.png"
import todo  from "../../assets/to-do-ist.png"
import Dashboard  from "../../assets/localhost_5174_dashboard (2).png"
import weather  from "../../assets/weather.png"
import contact  from "../../assets/contact list.png"
import bookmark  from "../../assets/bookmark.png"
import headphone  from "../../assets/Headphone - Google Chrome 12_2_2024 3_43_02 PM.png"
import eslam from "../../assets/Eslam - Google Chrome 1_16_2025 2_39_19 PM.png"
import  dotcode from "../../assets/DOTCODE.png"
import fashion from "../../assets/fashion.png"
import custommer from "../../assets/custommer.png"
import party from "../../assets/party.png"
import Dev from "../../assets/dev.png"
import daniels from "../../assets/daniels.png"

export default function Projects() {


    Aos.init()

    const projectDetails = [

      {
        image: fashion ,
        title: "Style Club",
        link: "https://style-club-fashion.vercel.app/",
      },
      {
        image: dotcode ,
        title: "Dot code",
        link: "https://dot-code.vercel.app/",
      },
      {
        image: Dashboard,
        title: "Dashboard",
        link: "https://style-club-dashboard.vercel.app",
      },
      {
        image: salla,
        title: "Salla",
        link: "https://salla-app-seven.vercel.app/",},
      {
        image: headphone,
        title: "Headphone",
        link: "https://head-phones-five.vercel.app/", 
      },
      
      {
        image: foodapp,
        title: "Food App",
        link: "https://ayafarh.github.io/meals-project/",},
       
        
        {
          image: popit,
          title: "Popit",
          link: "https://ayafarh.github.io/popit/"},
          {
            image: todo,
            title: "To Do List",
            link: "https://ayafarh.github.io/to-do-list/"},
            {
              image: bookmark,
              title: "Bookmark",
              link: "https://ayafarh.github.io/book-mark/"},
        
        {
          image:eslam ,
          title: "protifolio",
          link: "https://eslam-fqng.vercel.app",
        },
      {
        image: melafy,
        title: "Melafy",
        link: "https://ayafarh.github.io/mealify/"},
       
       
        {
        image: weather,
        title: "Weather App",
        link: "https://ayafarh.github.io/weather/"},
        {
          image: custommer,
          title:"customers",
          link: "https://ayafarh.github.io/customer-and-transaction/",
        },
      {
        image: contact,
        title: "Contact List",
        link: "https://ayafarh.github.io/contact-list/"},
      
        {
          image: mentor,  
          title: "Mentor",
          link: "https://ayafarh.github.io/my-mentors/"},
          {
            image:party ,  
            title: "party",
            link: "https://party-jm8ov18cv-ayafarhs-projects.vercel.app/"},
            {
              image: Dev ,  
              title: "Dev",
              link: "https://dev-phi-two.vercel.app/",
            },
            {
              image: daniels ,  
              title: "Daniels",
              link: "https://daniels-six.vercel.app/",
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
     {projectDetails.map((project,index)=> {
       return(
        <div key={index}  className='col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 border-2 border-secondry shadow-2xl rounded overflow-hidden  hover:rotate-1 transition-all duration-300 dark:border-darkprimary dark:shadow-darksecondry' >
        <img src={project.image} alt=""  className='w-full h-[200px] object-cover'/>
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
