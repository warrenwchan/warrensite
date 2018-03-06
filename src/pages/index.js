import React, { Component } from 'react'
import styles from '../layouts/index.scss'
import Prismic from 'prismic-javascript'
import Link from 'gatsby-link'

import Jumbotron from '../components/Jumbotron'
import Skillset from '../components/Skillset'

import grid from '../assets/white-Grid.svg'

class IndexPage extends Component {
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
    if (this.state.doc) {
      console.log(this.state.doc)
      const document = this.state.doc.data;
      return (
        <div style={{position: `relative`, background: `url(${grid})`}}>
          <Jumbotron/>
          <Skillset/>
        </div>
      )
    }
    return (
      <div className="donut"></div>
    )
  }
}

export default IndexPage
