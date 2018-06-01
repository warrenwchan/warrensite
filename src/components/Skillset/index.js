import React, { Component } from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'

import devImage from '../../assets/photos/jay-wennington-624-unsplash.jpg'
import designImage from '../../assets/photos/brad-neathery-248309-unsplash.jpg'
import photoImage from '../../assets/photos/fabian-grohs-524350-unsplash.jpg'

const SkillBox = (props) => {
  return (
    <div className="skillBox" style={{ background: `linear-gradient(rgba(1, 36, 39, 0.70), rgba(21, 24, 24, 0.90)),url(${props.photo}) center / cover` }}>
      <Link to={props.to}>
        <div className="skillContent">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <p>Learn more</p>
        </div>
      </Link>
    </div>
  )
}

class Skillset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: 'photography',
    }
    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  handleOptionClick(id, event) {
    this.setState({skill: id});
    console.log(this.state.skill)
  }

  render() {
    const skillMessage = () => {
      if (this.state.skill === "dev") {
        return (
          <SkillBox
            title="Web Dev"
            desc="Front-end web developer working with you to build your personalized website."
            to="/dev/"
            photo={photoImage}
          />
        )
      } else if (this.state.skill === "design") {
        return (
          <SkillBox
            title="Graphic Design"
            desc="Creating with pen, paper, photoshop and illustrator"
            to="/design/"
            photo={designImage}
          />
        )
      } else {
        return (
          <SkillBox
            title="Photography"
            desc="Lets take some portraits, lanscape headshots or product shots. You name it."
            to="/photography/"
            photo={devImage}
          />
        )
      }
    }

    return (
      <div className="skillsContainer">
        <div className="skillList">
          <a className="skillItem" onClick={() => {this.handleOptionClick('dev')}}>
            <span className="skillItemName">Web Development</span>
            <div className="highlight"></div>
          </a>
          <a className="skillItem" onClick={() => {this.handleOptionClick('design')}}>
            <span className="skillItemName">Graphic Design</span>
            <div className="highlight"></div>
          </a>
          <a className="skillItem" onClick={() => {this.handleOptionClick('photography')}}>
            <span className="skillItemName">Photography</span>
            <div className="highlight"></div>
          </a>
        </div>
        {skillMessage()}
      </div>
    );
  }
}

export default Skillset;
