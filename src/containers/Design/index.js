import React, { Component } from 'react'
import styles from './styles.scss'
import { Link } from 'react-router-dom';
import Prismic from 'prismic-javascript'

import SubPage from '../subpage/'
import Loader from '../../components/Loader/'
import PhotoContain from '../../components/PhotoContainer/'
import PhotoContainer from '../../components/PhotoContainer/';

class Design extends Component {
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
        Prismic.Predicates.at('document.type', 'design_page')
      ).then(response => {
        if (response) {
          this.setState({ doc: response.results[0] });
        }
      });
    });
  }

  render() {
    if (this.state.doc) {
      const design = this.state.doc.data;
      return(
        <div>
          <SubPage
            title="Graphic Design"
            photo={design.banner_image.url}
          >
            <section className="projectCategoryContainer">
              {design.body.map((cat, i) => {
                return (
                  <Link to="/soon/" key={i}>
                    <PhotoContainer
                      class='projectCategory'
                      photo={cat.primary.image.url}
                    >
                      <h2>{cat.primary.category[0].text}</h2>
                    </PhotoContainer>
                  </Link>
                )
              })}
            </section>
          </SubPage>
        </div>
      )
    } else {
      return (
        <Loader/>
      )
    }
  }
}

export default Design;
