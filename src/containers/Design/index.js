import React, { Component } from 'react'
import styles from './styles.scss'

import SubPage from '../subpage/'
import { Link } from 'react-router-dom';

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
        >
          <section className="projectCategoryContainer">
            <Link to="/">
              <div className="projectCategory">
                <h2>Logofolio</h2>
              </div>
            </Link>
          </section>
        </SubPage>
      </div>
    )
  }
}

export default Design;
