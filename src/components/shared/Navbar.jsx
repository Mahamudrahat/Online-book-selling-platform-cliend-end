import {useState} from 'react'
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <section className="bg-orange-300 p-4">
        <div className="container mx-auto">
        <header className="flex items-center justify-between">
        <div className="flex gap-4">
            <Link to={ROUTES.Home}><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c039b824474525.56334ce736de9.jpg" alt="" className="w-100 h-10"/></Link>
            <p className="font-serif font-[400]">Old Town Bookstore</p>
          </div>
          {/* Navbar */}
        <nav>
        <div className="hidden md:flex justify-center gap-4">
        <Link to={ROUTES.Home} className="hover:text-orange-600 cursor-pointer text-sm sm:text-base md:text-lg">
              
                Home
              </Link>
              <div
                className="hover:text-orange-600 cursor-pointer text-sm sm:text-base md:text-lg"
              >
                About Us
              </div>
              <span className="hover:text-orange-600 cursor-pointer text-sm sm:text-base md:text-lg">
                Contact Us
              </span>
              <Link to={ROUTES.FAQ}><span className="hover:text-orange-600 cursor-pointer text-sm sm:text-base md:text-lg">
                Courses
              </span></Link>
              
            </div>
            <button
              className="p-2 md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
        </nav>
        <div className="space-x-4 hidden md:flex">
            <button type="button" className="bg-orange-900 text-white p-2 rounded-md">Sign Up</button>
            <button type="button" className="bg-orange-900 text-white p-2 rounded-md">Sign In</button>
        </div>
        </header>
        {isOpen && ( <div className="md:hidden bg-gray-100 p-4 mt-2 rounded-lg shadow-md">
          <div className="md:hidden flex flex-col mt-4 space-y-2">
          <Link to={ROUTES.Home}
              className="hover:text-orange-600 cursor-pointer text-sm"
            >
              Home
            </Link>
            <div
              className="hover:text-orange-600 cursor-pointer text-sm"
            >
              About Us
            </div>
            <span className="hover:text-orange-600 cursor-pointer text-sm">
              Contact Us
            </span>
            <Link to={ROUTES.FAQ}>
            <span className="hover:text-orange-600 cursor-pointer text-sm">
             Courses
            </span></Link>
            
           <Link to=""><button type="button" className="bg-orange-900 text-white p-2 rounded-md">Sign Up</button></Link> 
            <Link to=""><button type="button" className="bg-orange-900 text-white p-2 rounded-md">Sign In</button></Link>
          </div>
       </div> )
        } 
        </div>
    </section>
  )
}
