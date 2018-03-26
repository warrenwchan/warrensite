import React from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactBgShape">
        <div className="contact">
          <div className="contactDesc">
            <h2>Lets Talk Business.</h2>
            <p>Interested in working together? Give me a heads up.</p>
            <Link to="/contact/">Contact</Link>
          </div>
        </div>
      </div>
      <div className="contactBgShape2">
      </div>
    </div>
  )
}

export default Contact;
