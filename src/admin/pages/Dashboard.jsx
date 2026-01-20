import React from 'react'
import { Sidebar } from '../components/Sidebar'
import Main from '../components/Main'
export const Dashboard = () => {
  return (
   <div className="dashboard-layout">
      <Sidebar />
      <Main/>
    </div>

  )
}
