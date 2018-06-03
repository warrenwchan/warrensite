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
        <Link to="/home/" style={{ textDecoration: `none`,}}>
          Back Home
        </Link>
      </div>
      <form name="contact" method="POST" data-netlify="true">
                <div className="inputFields">
                  <input type="text" name="name" placeholder="Whats your first name?"/>
                  <input type="text" name="name" placeholder="Your last name?"/>
                </div>
                <div className="inputFields">
                  <input type="email" name="email" placeholder="Your email?"/>
                  <input type="tel" name="phone" placeholder="Lastly your phone number"/>
                </div>
                <div>
                  <textarea name="message" placeholder="What can I do for you?"></textarea>
                </div>
                <div className="inputRadio">
                  <h3>How would you like me to contact you?</h3>
                  <span>
                    <input type="radio" id="contactChoice1" name="contact" value="email"/>
                    <label htmlFor="contactChoice1">Email</label>
                  </span>
                  <span>
                    <input type="radio" id="contactChoice2" name="contact" value="phone"/>
                    <label htmlFor="contactChoice2">Phone</label>
                  </span>
                  <span>
                    <input type="radio" id="contactChoice3" name="contact" value="mail"/>
                    <label htmlFor="contactChoice3">Text</label>
                  </span>
                </div>
                <button className="submitButton" type="submit">Send</button>
              </form>
    </section>
  )
}

export default Soon
