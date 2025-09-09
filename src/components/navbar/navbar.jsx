import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className="logo" />

      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#app-download"
            onClick={() => setMenu("Mobile-app")}
            className={menu === "Mobile-app" ? "active" : ""}
          >
            Mobile App
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setMenu("Contact-us")}
            className={menu === "Contact-us" ? "active" : ""}
          >
            Contact Us
          </a>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        <button className='button'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
