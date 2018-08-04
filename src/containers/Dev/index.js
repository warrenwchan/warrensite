import React, { Component } from 'react'
import styles from './styles.scss'
import SubPage from '../subpage/'
import ProjectCard from '../../components/ProjectCard/'

class DevPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
    }
  }

  render() {
    const dev = this.props.data.allPrismicDevPage.edges[0].node
    console.log(dev)
    return (
      <section>
        <SubPage
          title={dev.data.title.text}
          photo={dev.data.banner.url}
        >
          <section className="projectCardContainer">
            {dev.data.body.map((project, i) => (
              <ProjectCard
                key={i}
                title={project.primary.title.text}
                desc={project.primary.description.text}
                blurb={project.primary.blurb.text}
                tech={project.primary.tech.text}
                url={project.primary.url.url}
                icon={project.primary.icon.url}
                image={project.primary.image.url}
              />
            ))}
          </section>
        </SubPage>
      </section>
    )
  }
}

export default DevPage;
