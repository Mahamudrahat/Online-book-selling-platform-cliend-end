import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';
import { ROUTES } from '../../routes';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const {user,logOut}=useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut=()=>{
        logOut().then(()=>{
            navigate("/login")
        }).catch((error)=>{
            console.error(error);
        })
    };

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <section className="bg-[#dea1fe] p-4">
        <div className="container mx-auto">
        <header className="flex items-center justify-between">
        <div className="flex gap-4">
            <Link to={ROUTES.Home}><img src="https://media.istockphoto.com/id/1146021242/vector/distant-learning-online-education-graduate-hat-on-a-laptop.jpg?s=612x612&w=0&k=20&c=X3prrYH9KfPdDke0DGdnRjk-sKBgebP6byGMg-ce8Rc=" alt="" className="w-100 h-10 rounded-lg"/></Link>
            <p className="font-serif font-[400]">Online Edu Care</p>
          </div>
          {/* Navbar */}
        <nav>
        <div className="hidden md:flex justify-center gap-4">
        <Link to={ROUTES.Home} className="hover:text-orange-600 cursor-pointer text-sm sm:text-base md:text-lg">
              
                Home
              </Link>
              <Link to={ROUTES.ABOUTUS}
                className="hover:text-orange-600 cursor-pointer text-sm sm:text-base md:text-lg"
              >
                About Us
              </Link>
              <Link to={ROUTES.CONTACTUS} className="hover:text-orange-600 cursor-pointer text-sm sm:text-base md:text-lg">
                Contact Us
              </Link>
              <Link to={ROUTES.COURSE}><span className="hover:text-orange-600 cursor-pointer text-sm sm:text-base md:text-lg">
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
        
        {user ? (
          <div className="flex justify-center items-center">
            <span className="text-black px-2">{user.displayName}</span>
            <img src={user.photoURL} alt="profilePicture" className="w-10 h-10 rounded-full border border-orange-800 p-1 m-2"/>
            <Link to="/login">
              <button
                onClick={handleSignOut}
                className="bg-orange-900 text-white p-2 rounded-md"
              >
                LogOut
              </button>
            </Link>
          </div>
        ) : (
          <div className="navbar-end">
            
            <Link to={ROUTES.LOGIN}><button type="button" className="bg-orange-900 text-white p-2 rounded-md">Login/Register</button></Link>
          
          </div>
        )}
        </div>
        </header>
        {isOpen && ( <div className="md:hidden bg-gray-100 p-4 mt-2 rounded-lg shadow-md">
          <div className="md:hidden flex flex-col mt-4 space-y-2">
          <Link to={ROUTES.Home}
              className="hover:text-orange-600 cursor-pointer text-sm"
            >
              Home
            </Link>
            <Link to={ROUTES.ABOUTUS}
              className="hover:text-orange-600 cursor-pointer text-sm"
            >
              About Us
            </Link>
            <Link to={ROUTES.CONTACTUS} className="hover:text-orange-600 cursor-pointer text-sm">
              Contact Us
            </Link>
            <Link to={ROUTES.COURSE}>
            <span className="hover:text-orange-600 cursor-pointer text-sm">
             Courses
            </span></Link>
            {user ? (
          <div className="navbar-end">
            <span className="text-black px-2">{user.displayName}</span>
            <img src={user.photoURL} alt="profilePicture" className="w-10 h-10 rounded-full border border-white p-1 m-2"/>
            <Link to="/login">
              <button
                onClick={handleSignOut}
                className="bg-orange-900 text-white p-2 rounded-mdt"
              >
                LogOut
              </button>
            </Link>
          </div>
        ) : (
          <div className="navbar-end">
           
            <Link to={ROUTES.LOGIN}><button type="button" className="bg-orange-900 text-white p-2 rounded-md">Login/Register</button></Link>
           
          </div>
        )}
            
           
            
          </div>
       </div> )
        } 
        </div>
    </section>
  )
}
