import React, { Component } from 'react';
import './styles.scss'
import SubPage from '../../containers/subpage/'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
      name: "",
      lastname: "",
      email: "",
      phone: "",
      message: "",
      contact: "",
    }
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const contactData = this.props.data.allPrismicContactPage.edges[0].node.data;
    const { name, lastname, email, phone, message, contact} = this.state;

    return(
      <section>
        <SubPage
          title={contactData.title.text}
          photo={contactData.banner.url}
        >
          <section className="ContactContainer">
             <h2>Hey look, a form!</h2>
             <p>Any work realated question or business ideas can be communicated with me through this handy form.</p>
             <form
              name="contact"
              method="post"
              action="/thank-you/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
            <input type="hidden" name="form-name" value="contact" />
              <div className="inputFields">
                <input type="text" name="name" placeholder="Whats your first name?" value={name} onChange={this.handleChange}/>
                <input type="text" name="lastname" placeholder="Your last name?" value={lastname} onChange={this.handleChange}/>
              </div>
              <div className="inputFields">
                <input type="email" name="email" placeholder="Your email?" value={email} onChange={this.handleChange}/>
                <input type="tel" name="phone" placeholder="Lastly your phone number" value={phone} onChange={this.handleChange}/>
              </div>
              <div>
                <textarea name="message" placeholder="What can I do for you?" value={message} onChange={this.handleChange}></textarea>
              </div>
              <div className="inputRadio">
                <h3>How would you like me to contact you?</h3>
                <span>
                  <input type="radio" id="contactChoice1" name="contact" value="email" onChange={this.handleChange} />
                  <label htmlFor="contactChoice1">Email</label>
                </span>
                <span>
                  <input type="radio" id="contactChoice2" name="contact" value="phone" onChange={this.handleChange}/>
                  <label htmlFor="contactChoice2">Phone</label>
                </span>
                <span>
                  <input type="radio" id="contactChoice3" name="contact" value="text" onChange={this.handleChange}/>
                  <label htmlFor="contactChoice3">Text</label>
                </span>
              </div>
              <button className="submitButton" type="submit">Send</button>
            </form>
          </section>
          <section className="contactLinkContainer">
            <h2>Other ways to reach me</h2>
            <div className="contactLinks">
              {contactData.body.map(( social, i ) => {
                return(
                  <a key={i} href={social.primary.link.url} className="contactLink">
                    <FontAwesomeIcon icon={["fab", `${social.primary.platforms}`]} size="2x"/>
                    <p>{social.primary.tag.text}</p>
                  </a>
                )
              })}
            </div>
          </section>
        </SubPage>
      </section>
    )
  }
}

export default Contact;
