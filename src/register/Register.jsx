import React, { useContext } from 'react'
// import Navbar from '../pages/shared/navbar/Navbar'
 import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import toast from 'react-hot-toast';
import { signOut } from 'firebase/auth';

export default function Register() {
    const {createUser,updateUserProfile,logOut}=useContext(AuthContext);
    const navigate=useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();
    
         const form = new FormData(event.currentTarget);
         
    
         const name = form.get("name");
         const photo = form.get("photo");
         const email = form.get("email");
         const password = form.get("password");
         console.log(name, photo, email, password);
         const updateProfileInfo={displayName:name,photoURL:photo}
    
        createUser(email, password,name,photo)
          .then((result) => {
            console.log(result?.user);
            updateUserProfile(updateProfileInfo)
            .then(() => {
              toast.success("User Registration and Profile Update Successful", {
                position: "top-right"
              });
              logOut().then(()=>{
                navigate("/login")
            }).catch((error)=>{
                console.error(error);
            })
              
            })
            .catch((error) => {
              console.error("Profile update error:", error);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };
      
  return (
    <div>
    
    <div className="py-20">
      <div className="flex h-full items-center justify-center">
        <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-900 flex-col flex h-full items-center justify-center sm:px-4">
          <div className="flex h-full flex-col justify-center gap-4 p-6">
            <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
              <form
                onSubmit={handleRegister}
                className="flex flex-col gap-4 pb-4"
              >
                <h1 className="mb-4 text-2xl font-bold dark:text-white text-center">
                  Register your Account
                </h1>

                <div>
                  <div className="mb-2">
                    <label
                      className="text-sm font-medium text-gray-900 dark:text-gray-300"
                      htmlFor="name"
                    >
                      Name:
                    </label>
                  </div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        autoComplete="on"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <label
                      className="text-sm font-medium text-gray-900 dark:text-gray-300"
                      htmlFor="photo"
                    >
                      Photo URL:
                    </label>
                  </div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                        id="photo"
                        type="text"
                        name="photo"
                        placeholder="Photo URL"
                        autoComplete="on"
                        required
                      ></input>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-2">
                    <label
                      className="text-sm font-medium text-gray-900 dark:text-gray-300"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                  </div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        autoComplete="on"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <label
                      className="text-sm font-medium text-gray-900 dark:text-gray-300"
                      data-testid="flowbite-label"
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="on"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button type="submit" className="btn btn-outline btn-info">
                    <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                      Register
                    </span>
                  </button>
                </div>
              </form>
              <div className="min-w-[270px]">
                <div className="mt-2 text-center dark:text-gray-200">
                  Already Have an Account? &nbsp;
                  <Link
                    className="text-blue-500 underline hover:text-blue-600"
                    to="/login"
                  >
                    Login Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
