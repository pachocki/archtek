import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from "../components/menu/Menu"
import Footer from "../components/footer/Footer"
import ToTop from "../hooks/ToTop"
import BackToTop from '../components/back-to-top/BackToTop'

const Layout = () => {
  return (
    <div className="mx-auto w-[98%]">
      <Menu/>
      <Outlet/>
      <Footer/>
      <ToTop/>
      <BackToTop/>
    </div>
  )
}

export default Layout
