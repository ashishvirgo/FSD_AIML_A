import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Link, Outlet} from 'react-router-dom'
import '../App.css'
const Home = () => {
  return (
    <div>
      <Header/>
      
      <nav>
        <ul>
            <li>
                <Link to="/login">About Us</Link>
            </li>
            <li>
                <Link to="/register">Contact Us</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register Here</Link>
            </li>
        </ul>
      </nav>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Home
