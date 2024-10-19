import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import { Outlet } from 'react-router-dom'
import Profile from '../components/profile/Profile'
import DashBoardLeftbar from '../components/dashboardsidebar/DashBoardLeftbar'

export default function DashboardLayout() {
  return (
    <>
      <Navbar />
      <div className="block lg:flex">
      <div className="min-w-64 shadow-md bg-slate-100">
            <DashBoardLeftbar />
          </div>
          <div className="min-h-screen p-10">
          <Outlet />
          </div>

      
      </div>
      
      <Footer />
    </>
  )
}
