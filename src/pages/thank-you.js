import React from 'react';
import '../styles/thank-you.scss';
import Link from 'gatsby-link';

const ThankYou =() => (
  <section
    className="thank-you-container"
    style={{
      display: `flex`,
      justifyContent: `center`,
      alignItems: `center`,
      height: `100vh`,
      textAlign: `center`,
    }}
  >
    <div className="thank-you-content">
      <h1>Thank you</h1>
      <h2>📥</h2>
      <p>I'll be sure to get back to your request!</p>
      <Link to="/"> Back to Home?</Link>
    </div>
  </section>
)

export default ThankYou;
