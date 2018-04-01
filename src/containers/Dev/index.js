import React, { Component } from 'react'
import styles from './styles.scss'
import { Link } from 'react-router-dom';
import Prismic from 'prismic-javascript'

import SubPage from '../subpage/'
import ProjectCard from '../../components/ProjectCard/'
import Loader from '../../components/Loader'

class DevPage extends Component {
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
        Prismic.Predicates.at('document.type', 'dev_page')
      ).then(response => {
        if (response) {
          this.setState({ doc: response.results[0] });
        }
      });
    });
  }

  render() {
    if(this.state.doc) {
      const dev = this.state.doc.data;
      console.log(dev)
      return(
        <div>
          <SubPage
            title={dev.page_title[0].text}
            photo={dev.banner.url}
          >
            <section className="projectCardContainer">
              {dev.body.map((project, i) => {
                return(
                  <ProjectCard
                    key={i}
                    title={project.primary.title[0].text}
                    desc={project.primary.description[0].text}
                    blurb={project.primary.blurb[0].text}
                    url={project.primary.url.url}
                    icon={project.primary.icon.url}
                    image={project.primary.image.url}
                  />
                )
              })}
            </section>
          </SubPage>
        </div>
      )
    }
    return (
      <Loader />
    )
  }
}

export default DevPage;
