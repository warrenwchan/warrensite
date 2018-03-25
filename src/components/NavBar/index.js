import React, { Component } from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown'

class Navbar extends Component {

  render() {
    return (
      <div className="navItems">
        <Link to="/" >Home</Link>
        <div className="dropdown">
          <a className="dropbtn">Work <FontAwesomeIcon icon={faCaretDown}/></a>
          <div className="dropdown-content">
            <Link to="/photography/">Photograpghy</Link>
            <Link to="/design/">Design</Link>
            <Link to="/dev/">Developer</Link>
          </div>
        </div>
        <Link to="/contact/" >Contact</Link>
      </div>
    )
  }
}

export default Navbar
