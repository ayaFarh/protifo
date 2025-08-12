import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef();

  // Close nav on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Toggle nav visibility
  const toggleVisible = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsVisible((prev) => !prev);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = useCallback(() => {
    document.documentElement.classList.toggle("dark");
  }, []);

  // Set initial visibility and handle resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsVisible(true);
        document.body.style.overflowY = "auto";
      } else {
        setIsVisible(false);
      }
    };


    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll when menu is open on small screens
  useEffect(() => {
    if (window.innerWidth < 768) {
      document.body.style.overflowY = isVisible ? "hidden" : "auto";
    }
    return () => {
      document.body.style.overflowY = "auto"; // Cleanup
    };
  }, [isVisible]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "aboute" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-secondry fixed top-0 left-0 right-0 z-20 shadow-xl  dark:bg-black dark:text-light" ref={navRef}>
      <div className="w-full container py-1">
        <div className="md:flex block justify-between items-center">
          <div className="flex items-center justify-between w-full">
            <h1 className="cursor-pointer font-bold text-xl">Aya Farh</h1>

            <i
              className={`fa-solid ${isVisible ? "fa-xmark" : "fa-bars"} 
                py-2 px-3 text-3xl rounded-lg text-black dark:text-white cursor-pointer 
                md:opacity-0 opacity-100 transition-transform duration-300 ease-in-out transform 
                ${isVisible ? "rotate-90" : "rotate-0"}`}
              aria-label="Toggle Menu"
              onClick={toggleVisible}
            />
          </div>

          <ul
            className={`flex flex-col md:flex-row w-[70%]   fixed md:static  right-0 bottom-0 top-[50px] 
              dark:bg-black bg-secondry
              md:items-center items-center text-2xl md:text-lg justify-center md:justify-end p-1 
              transition-all duration-300 ease-in-out transform
              ${
                isVisible
                  ? "opacity-100 translate-y-0 pointer-events-auto "
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
          >
            {navItems.map((item) => (
              <li className="p-3 px-8" key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={800}
                  className="cursor-pointer"
                  activeClass="font-bold text-darksecondry"
                  onClick={() => {
                      
                    if (window.innerWidth < 768) {
                      setIsVisible(false);
                      
                    }
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <button className="text-2xl cursor-pointer" onClick={toggleDarkMode}>
                <i className="fa-regular fa-moon" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
