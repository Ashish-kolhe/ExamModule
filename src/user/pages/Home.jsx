import React from 'react'
import Navbar from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ExamCard } from '../components/ExamCard';
import { Footer } from '../components/Footer';
export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ExamCard />
      <Footer />
    </div>
  )
}
