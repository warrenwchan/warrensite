import React, { Component } from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class MenuItems extends Component {

  render() {
    return (
      <div className={(this.props.toggle === true ? 'menuItems' : 'menuItems menuItemsHide')}>
        <Link to="/home/" activeStyle={{ color: `#22a6b3` }} onClick={this.props.onClickToggle}>Home</Link>
        <div className="dropdown">
          <a className="dropbtn">Work <FontAwesomeIcon icon="caret-down"/></a>
          <div className="dropdown-content">
            <Link to="/photography/" activeStyle={{ color: `#22a6b3` }} onClick={this.props.onClickToggle}><FontAwesomeIcon icon="caret-right"/> Photography</Link>
            <Link to="/design/" activeStyle={{ color: `#22a6b3` }} onClick={this.props.onClickToggle}><FontAwesomeIcon icon="caret-right"/> Design</Link>
            <Link to="/dev/" activeStyle={{ color: `#22a6b3` }} onClick={this.props.onClickToggle}><FontAwesomeIcon icon="caret-right"/> Developer</Link>
          </div>
        </div>
        <Link to="/soon/" activeStyle={{ color: `#22a6b3` }} onClick={this.props.onClickToggle}>Contact</Link>
      </div>
    )
  }
}

export default MenuItems
