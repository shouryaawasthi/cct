import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';



const MainLayout = () => {
  return (
   <div>
    <Navbar />
      <main className='mt-20'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout