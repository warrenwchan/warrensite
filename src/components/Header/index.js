import React from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'

import logo from '../../assets/white-Logo.svg'

const Header = () => (
  <div className="navbar">
    <div className="navBarContainer">
      <div className="navLogo">
        <Link to="/">
          <img src={logo} alt="Logo"/>
        </Link>
      </div>
      <div className="navItems">
        <Link to="/" >Home</Link>
        <Link to="/skillsets/">Skill Sets</Link>
        <Link to="/contact/" >Contact</Link>
      </div>
    </div>
  </div>
)

export default Header
