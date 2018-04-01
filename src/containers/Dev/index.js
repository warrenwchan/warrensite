import React, { Component } from 'react'
import styles from './styles.scss'
import { Link } from 'react-router-dom';

import SubPage from '../subpage/'
import ProjectCard from '../../components/ProjectCard/'

class DevPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <SubPage title="Developer">
          <section className="projectCardContainer">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
          </section>
        </SubPage>
      </div>
    )
  }
}

export default DevPage;
