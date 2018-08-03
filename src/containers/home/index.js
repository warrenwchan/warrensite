import React, { Component } from 'react'
import Prismic from 'prismic-javascript'

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
              <h2>Warren Chan</h2>
            </div>
            <div className="jumbotron">
              <Jumbotron
                doc={document}
              />
            </div>
          </div>
          <Skillset/>
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
