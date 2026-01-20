import React from 'react'
import { Profile } from './Profile'
import { Card } from './card'
import { Footer } from './Footer'
export const Sidebar = () => {
  return (
    
       <aside className="sidebar">
      
      <Profile />

     
      <Card />

     
     <Footer/>
    </aside>
  
  )
}
