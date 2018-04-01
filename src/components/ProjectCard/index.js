import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const ProjectCard = () => {
  return(
    <div className="projectCard">
      <div className="icon"></div>
        <div className="projectDesc">
          <h2>Project Title</h2>
          <h3>Project description, This project is a test project test the layout.</h3>
          <p>Project blurb and abouts and all that good stuff Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          <Link to="/404/">Take a Look <FontAwesomeIcon icon="caret-right"/></Link>
        </div>
      <div className="projectCardImage"></div>
    </div>
  )
}

export default ProjectCard
