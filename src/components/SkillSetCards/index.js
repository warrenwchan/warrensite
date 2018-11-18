import React, { Component } from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'

import devImg from "../../assets/photos/fabian-grohs-524350-unsplash.jpg";
import designImg from "../../assets/photos/brad-neathery-248309-unsplash.jpg";
import photoImg from "../../assets/photos/jay-wennington-624-unsplash.jpg";

const skills = [
  {
    title: "Web Development",
    desc: "Front-end web developer working with you to build your personalized website.",
    path: "/dev/",
    photo: devImg
  },
  {
    title: "Graphic Design",
    desc: "Currently practicing front-end web design around landing pages and single page applications.",
    path: "/design/",
    photo: designImg
  },
  {
    title: "Photography",
    desc: "Lets take some portraits, lanscape headshots or product shots. You name it.",
    path: "/photography/",
    photo: photoImg
  },
]

const SkillBox = (props) => {
  return (
    <div className="skillBox">
      <div className="skillImage icon" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.7) 90%),url(${props.photo}) center / cover` }}></div>
      <Link to={props.to}>
        <div className="skillContent">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <div className="skillBoxBtn">
            <p>Learn more</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

class SkillSetCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="skillsContainer">
        {skills.map((skill, i) => {
          return (
            <SkillBox
              key={i}
              title={skill.title}
              desc={skill.desc}
              to={skill.path}
              photo={skill.photo}
            />
          )
        })}
      </section>
    );
  }
}

export default SkillSetCards;
