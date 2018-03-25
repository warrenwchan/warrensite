import React from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'
import Navbar from '../NavBar/'

import logo from '../../assets/white-Logo.svg'

const Header = () => (
  <div className="navbar">
    <div className="navBarContainer">
      <div className="navLogo">
        <Link to="/">
          <img src={logo} alt="Logo"/>
        </Link>
      </div>
      <Navbar/>
    </div>
  </div>
)

export default Header
