import React from 'react';
import './styles.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  console.log(props.url)
  return(
    <div className="project-card">
      <div className="icon" style={{ background: `url(${props.icon}) center / cover` }}></div>
      <div className="project-desc">
        <h2>{props.title}</h2>
        <h3>{props.desc}</h3>
        <p>{props.blurb}</p>
        <p className="tech">Tech: {props.tech}</p>
        <a href={props.url}>Take a Look<FontAwesomeIcon className="project-link-arrow" icon="caret-right"/></a>
      </div>
      <a href={props.url}><div className="project-card-image" style={{ background: `url(${props.image}) center / cover` }}></div></a>
    </div>
  )
}

export default ProjectCard
