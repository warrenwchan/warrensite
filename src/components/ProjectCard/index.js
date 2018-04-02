import React from 'react';
import './styles.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const ProjectCard = (props) => {
  return(
    <div className="projectCard">
      <div className="icon" style={{ background: `url(${props.icon}) center / cover` }}></div>
        <div className="projectDesc">
          <h2>{props.title}</h2>
          <h3>{props.desc}</h3>
          <p>{props.blurb}</p>
          <p className="tech">Tech: {props.tech}</p>
          <a href={props.url}>Take a Look <FontAwesomeIcon icon="caret-right"/></a>
        </div>
      <div className="projectCardImage" style={{ background: `url(${props.image}) center / cover` }}></div>
    </div>
  )
}

export default ProjectCard
