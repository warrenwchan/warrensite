import React, { Component } from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'

const skills = [
  {
    title: "Web Development",
    desc: "Front-end web developer working with you to build your personalized website.",
    path: "/dev/",
    photo: "http://0.0.0.0:8000/static/fabian-grohs-524350-unsplash.95b34f6f.jpg"
  },
  {
    title: "Graphic Design",
    desc: "Currently practicing front-end web design around landing pages and single page applications.",
    path: "/design/",
    photo: "http://0.0.0.0:8000/static/brad-neathery-248309-unsplash.195c41c8.jpg"
  },
  {
    title: "Photography",
    desc: "Lets take some portraits, lanscape headshots or product shots. You name it.",
    path: "/photography/",
    photo: "/static/jay-wennington-624-unsplash.e8d93958.jpg"
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
