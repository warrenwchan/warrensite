import React, { Component } from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'

import devImage from '../../assets/photos/jay-wennington-624-unsplash.jpg'
import designImage from '../../assets/photos/brad-neathery-248309-unsplash.jpg'
import photoImage from '../../assets/photos/fabian-grohs-524350-unsplash.jpg'

const SkillBox = (props) => {
  return (
    <div className="skillBox">
      <div className="skillImage icon" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.8) 90%),url(${props.photo}) center / cover` }}></div>
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
  }

  render() {
    return (
      <div className="skillsContainer">
        <SkillBox
          title="Web Dev"
          desc="Front-end web developer working with you to build your personalized website."
          to="/dev/"
          photo={photoImage}
        />
        <SkillBox
          title="Graphic Design"
            desc="Creating with pen, paper, photoshop and illustrator"
            to="/design/"
            photo={designImage}
        />
        <SkillBox
          title="Photography"
          desc="Lets take some portraits, lanscape headshots or product shots. You name it."
          to="/photography/"
          photo={devImage}
        />
      </div>
    );
  }
}

export default Skillset;
