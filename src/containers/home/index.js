import React, { Component } from 'react'
import styles from './styles.scss'
import Prismic from 'prismic-javascript'
import Link from 'gatsby-link'

import Jumbotron from '../../components/Jumbotron'
import Skillset from '../../components/Skillset'
import ContactSection from '../../components/ContactSection'
import Loader from '../../components/Loader'

class Home extends Component {
  state = {
    doc: null,
  }

  componentWillMount() {
    const apiEndpoint = 'https://warrensite.prismic.io/api/v2';

    Prismic.api(apiEndpoint).then(api => {
      api.query(
        Prismic.Predicates.at('document.type', 'home_page')
      ).then(response => {
        if (response) {
          this.setState({ doc: response.results[0] });
        }
      });
    });
  }

  render() {
    if (this.state.doc) {
      const document = this.state.doc.data;
      return (
        <div>
          <div className="jumbotronContainer">
            <div className="overlayText">
              <h2>WARREN CHAN</h2>
            </div>
            <div className="jumbotron">
              <Jumbotron
                doc={document}
              />
            </div>
          </div>
          <Skillset/>
          <form name="contact" method="post" action="/thank-you" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="contact" value="contact" />
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
          <ContactSection/>
        </div>
      )
    }
    return (
      <Loader />
    )
  }
}

export default Home;
