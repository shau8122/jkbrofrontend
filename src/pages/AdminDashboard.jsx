import React, { useState } from 'react'
import { AdminDashboardNav, AdminNavigation, Dashboard, EditAdminProfile, OrdersManagement, PayoutRequest, Tracking } from '../components'

const DashboardOptions = [
    {
      value: "dashboard",
      title: "Dashboard",
    },
    {
      value: "ordersManagement",
      title: "Orders Management",
      subtitle: ""
    },
    {
      value: "payoutRequest",
      title: "Payout Request",
      subtitle: "",
    },
    {
        value: "tracking",
        title: "Tracking",
        subtitle: ""
    },
    {
      value: "profile",
      title: "Profile",
      subtitle: ""
    },
    // {
    //   value: "editProfile",
    //   title: "Contact Us",
    //   subtitle: "",
    // },
  ]

const sectionMap = {
    "dashboard": Dashboard,
    "ordersManagement": OrdersManagement,
    "payoutRequest": PayoutRequest,
    "tracking": Tracking,
    "profile": EditAdminProfile,
}


const AdminDashboard = () => {
   
    const [ section, setSection ] = useState() 

    const handleClick = (value) => {
        setSection(value)
      }

    const selectedSection = section?.value
    const SelectedComp = selectedSection && sectionMap[selectedSection]

  return (
    <div className='w-[100svw] overflow-x-clip'>
        <AdminDashboardNav />
        <div className='grid grid-cols-12 gap-4 min-h-[80svh] max-h-max p-8'>
          <div className='md:col-span-2 col-span-12 w-[100%] mx-2 flex justify-center h-max sticky top-1'>
                <AdminNavigation 
                    onChange={(value) => handleClick(value)}
                    value={section}
                    config={DashboardOptions}
                />
        </div>

          <div className='md:col-span-10 col-span-12'>
                  { SelectedComp && <SelectedComp />}
          </div>

    </div>
    </div>
  )
}

export default AdminDashboard