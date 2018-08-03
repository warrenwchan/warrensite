import React, { Component } from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'
import PhotoContainer from '../../components/PhotoContainer'

class SubPage extends Component {
  state = {

  }

  render() {
    return (
      <div className="subPageContainer">
        <PhotoContainer class="banner" photo={this.props.photo} >
          <div className="bannerTitle">
            <h2>{this.props.title}</h2>
          </div>
        </PhotoContainer>
        <section className="content">
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default SubPage;
