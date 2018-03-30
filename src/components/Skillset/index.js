import React, { Component } from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'

import photoicon from '../../assets/photo-icon.svg'
import keyicon from '../../assets/key-icon.svg'
import penicon from '../../assets/pen-icon.svg'
import bubbleSlider from '../../assets/bubble.svg'

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
          <div className="skillDesc">
            <h2>A Web Developer</h2>
            <p>Front-end web developer working with you to build your personalized website. </p>
            <Link to="/dev/">Take a look</Link>
          </div>
        )
      } else if (this.state.skill === "design") {
        return (
          <div className="skillDesc">
            <h2>A Graphic Design</h2>
            <p>Creating with pen, paper, photoshop and illustrator</p>
            <Link to="/design/">Take a look</Link>
          </div>
        )
      } else {
        return (
          <div className="skillDesc">
            <h2>A Photographer</h2>
            <p>Lets take some portraits, lanscape headshots or product shots. You name it.</p>
            <Link to="/photography/">Take a look</Link>
          </div>
        )
      }
    }

    return (
      <div className="skillsContainer">
        <div className="sliderContainer">
          <div className="sliderBox">
            <div className="sliderItem" id="photography" onClick={() => (this.handleOptionClick("photography"))}>
              <img className={this.state.skill === "photography" ? "isActive" : null} src={photoicon}/>
            </div>
            <div className="sliderItem" id="dev" onClick={() => (this.handleOptionClick("dev"))}>
              <img className={this.state.skill === "dev" ? "isActive" : null} src={keyicon}/>
            </div>
            <div className="sliderItem" id="design" onClick={() => (this.handleOptionClick("design"))}>
              <img className={this.state.skill === "design" ? "isActive" : null} src={penicon}/>
            </div>
          </div>
        </div>
        {skillMessage()}
      </div>
    );
  }
}

export default Skillset;
