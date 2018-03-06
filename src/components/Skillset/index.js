import React, { Component } from 'react'
import styles from './styles.scss'

import photoicon from '../../assets/photo-icon.svg'
import keyicon from '../../assets/key-icon.svg'
import penicon from '../../assets/pen-icon.svg'
import bubbleSlider from '../../assets/bubble.svg'

class Skillset extends Component {
  state = {  }
  render() {
    return (
      <div className="skillsContainer">
        <div className="sliderContainer">
          <div className="sliderBox">
            <div className="sliderItem">
              <img src={photoicon}/>
            </div>
            <div className="sliderItem">
              <img src={keyicon}/>
            </div>
            <div className="sliderItem">
              <img src={penicon}/>
            </div>
          </div>
        </div>
        <div className="skillDesc">
          <h2>I Am a Photographer</h2>
          <p>Lets take some portraits, lanscape headshots or product shots. You name it.</p>
          <a href="/404/">Take a look</a>
        </div>
      </div>
    );
  }
}

export default Skillset;
