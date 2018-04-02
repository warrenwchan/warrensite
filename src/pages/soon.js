import React from 'react';
import { Link } from 'react-router-dom';

const Soon = () => {
  return (
    <section
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`,
        textAlign: `center`,
        background: `linear-gradient(to top, #73c8a9, #373b44)`,
      }}
    >
      <div>
        <h2 style={{ color: `white`, fontSize: `2rem`, }}>
          🚧 Sorry Coming Soon 🚧
        </h2>
        <Link to="/" style={{ textDecoration: `none`,}}>
          Back Home
        </Link>
      </div>
    </section>
  )
}

export default Soon
