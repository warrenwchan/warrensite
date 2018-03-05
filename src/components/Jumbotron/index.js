import React, { Component } from 'react'
import styles from './styles.scss'

import photo from '../../assets/photos/_MG_9081.jpg'

class Jumbotron extends Component {
  state = {  }
  render() {
    return (
      <div className="jumbotronContainer">
        <img src={photo} alt="jumbotron image" />
      </div>
    );
  }
}

export default Jumbotron;
