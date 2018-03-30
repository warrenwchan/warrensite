import React, { Component } from 'react'
import styles from './styles.scss'

import SubPage from '../subpage/'

class DevPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <SubPage
          title="Developer"
        />
      </div>
    )
  }
}

export default DevPage;
