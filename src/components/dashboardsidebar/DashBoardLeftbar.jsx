import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';
import { CgProfile } from "react-icons/cg";
import { MdBlock } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';

import {
    FaUser,
    FaUsers,
    FaEnvelope,
    FaSignOutAlt,
    FaPenAlt,
  } from "react-icons/fa";
  import { BiSolidCategoryAlt } from "react-icons/bi";
import { ROUTES } from '../../routes';

export default function DashBoardLeftbar() {
    const { user } = useContext(AuthContext);
  return (
    <div className="p-4">
           <div className="flex flex-row lg:flex-col items-start gap-2">
           <nav className="flex flex-col gap-4">
          <div className="flex gap-2">
          <CgProfile size="25" color="teal"/> <span>Profile</span>
          
          </div>

          <hr className="my-4" />
          

          {!user?.isBlock && (
            
  <>
    {/* Admin Links */}
    {user?.isAdmin && (
     <>
                <NavLink
                  to="/dashboard/allUsers"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  <FaUsers className="inline mr-2" />
                  All Users
                </NavLink>
                <Link
                  to="/dashboard/categories"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  <BiSolidCategoryAlt className="inline mr-2" />
                  Category
                </Link>
                <Link
                  to={ROUTES.PRODUCT}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  <BiSolidCategoryAlt className="inline mr-2" />
                  Products
                </Link>
                </>
            )}
            {!user.isAdmin && (
                <>
                <NavLink
                to="/dashboard/messages"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }
              >
                <FaEnvelope className="inline mr-2" />
                Messages
              </NavLink>
        
                </>
            )

            }

  </>
)}
           
</nav>
           </div>

    </div>
  )
}
