import React, { Component } from 'react'
import styles from './styles.scss'

import SubPage from '../subpage/'

class Design extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <SubPage
          title="Graphic Design"
        />
      </div>
    )
  }
}

export default Design;
