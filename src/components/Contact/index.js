import React from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactDesc">
        <h2>Lets Team Up!</h2>
        <p>Lets See What We Can Create Together!</p>
        <Link to="/contact/">Contact</Link>
      </div>
      <div className="contactBgShape"></div>
      <div className="contactBgShape2"></div>
    </div>
  )
}

export default Contact;
