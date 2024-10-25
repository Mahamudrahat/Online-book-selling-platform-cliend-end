import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider';
import { CgProfile } from "react-icons/cg";
import { MdOutlinePayments } from "react-icons/md";
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
    if (!user) {
      return <div>Loading...</div>; // Render a loading state until the user data is available
    }
  return (
    <div className="p-4">
           <div className="flex flex-row lg:flex-col items-start gap-2">
           <nav className="flex flex-col gap-4">
           <NavLink to={ROUTES.DASHBOARD} className="flex gap-2">
          <CgProfile size="25" color="teal"/> <span>Profile</span>
          
          </NavLink>

          <hr className="my-4" />
          

          {!user?.isBlock && (
            
  <>
    {/* Admin Links */}
    {user?.isAdmin && (
     <>

<NavLink
                to="/dashboard/paymentDetails"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }
              >
                <MdOutlinePayments className="inline mr-2" />
                Payment Details
              </NavLink>
           
                <NavLink
                  to={ROUTES.SHOWALLUSERLIST}
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
                  Create Category
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
                  Create Products
                </Link>
                <Link
                  to={ROUTES.SHOWALLCATEGORY}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  <BiSolidCategoryAlt className="inline mr-2" />
                  Edit/Delete Category
                </Link>
                <Link
                  to={ROUTES.SHOWALLPRODUCT}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-500"
                  }
                >
                  <BiSolidCategoryAlt className="inline mr-2" />
                  Edit/Delete Product
                </Link>
                </>
            )}
            {!user?.isAdmin && (
                <>
                <NavLink
                to="/dashboard/paymentDetails"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-500"
                }
              >
                <MdOutlinePayments className="inline mr-2" />
                Payment Details
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
