import React, { Component } from 'react'
import Prismic from 'prismic-javascript';
import styles from './styles.scss'

import photo from '../../assets/photos/_MG_9081.jpg'

class Jumbotron extends Component {
  state = {
    doc: null,
  }

  componentWillMount() {
    const apiEndpoint = 'https://warrensite.prismic.io/api/v2';
    const accessToken = 'MC5XcHpoVENnQUFDd0EwdG01.77-977-977-977-9S27vv70AI--_vW_vv70I77-9JWzvv70Tch3vv714C--_ve-_vUjvv73vv70-77-9Le-_vQ';

    Prismic.api(apiEndpoint, {accessToken}).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'home_page')).then(response => {
        if (response) {
          this.setState({ doc: response.results[0] });
        }
      });
    });
  }

  render() {
    console.log(this.state.doc)
    if (this.state.doc) {
      const document = this.state.doc.data;
      return (
        <div className="jumbotronContainer">
          <img src={photo} alt="jumbotron image" />
        </div>
      );
    } return (
      <h1>
        hello
      </h1>
    )
  }
}

export default Jumbotron;
