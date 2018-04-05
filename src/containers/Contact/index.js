import React, { Component } from 'react';
import './styles.scss'
import Prismic from 'prismic-javascript'

import SubPage from '../../containers/subpage/'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import Loader from '../../components/Loader/'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
    }
  }

  componentWillMount() {
    const apiEndpoint = 'https://warrensite.prismic.io/api/v2';

    Prismic.api(apiEndpoint).then(api => {
      api.query(
        Prismic.Predicates.at('document.type', 'contact_page')
      ).then(response => {
        if (response) {
          this.setState({ doc: response.results[0] });
        }
      });
    });
  }

  render() {
    if (this.state.doc) {
      const contact = this.state.doc.data;
      return (
        <div>
          <SubPage
            title={contact.title[0].text}
            photo={contact.banner.url}
          >
            <section className="ContactContainer">
              <h2>Hey look, a form!</h2>
              <p>Any work realated question or business ideas can be communicated with me through this handy form.</p>
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
            <section className="contactLinkContainer">
              <h2>Other ways to reach me</h2>
              <div className="contactLinks">
                {contact.body.map(( social, i ) => {
                  return(
                    <a key={i} href={social.primary.link.url} className="contactLink">
                      <FontAwesomeIcon icon={["fab", `${social.primary.platforms}`]} size="2x"/>
                      <p>{social.primary.tag[0].text}</p>
                    </a>
                  )
                })}
              </div>
            </section>
          </SubPage>
        </div>
      )
    }
    return (
      <Loader/>
    )
  }
}

export default Contact;
