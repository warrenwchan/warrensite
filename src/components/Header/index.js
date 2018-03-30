import React, {Component} from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'
import MenuItems from '../MenuItems/'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import logo from '../../assets/white-Logo.svg'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state= {
      menuToggle: false,
    }
    this.menuToggle = this.menuToggle.bind(this)
  }

  menuToggle() {
    this.setState({
      menuToggle: !this.state.menuToggle
    })
  }

  render() {
    return (
      <div className="navbar">
        <div className="navBarContainer">
          <div className="navLogo">
            <Link to="/">
              <img src={logo} alt="Logo"/>
            </Link>
            <a className='menuToggle' onClick={() => (this.menuToggle())} >
              {this.state.menuToggle === true ?
                <FontAwesomeIcon icon="times" size="2x"/>
              :
                <FontAwesomeIcon icon="bars" size="2x"/>
              }
            </a>
          </div>
          <MenuItems
            toggle={this.state.menuToggle}
            onClickToggle={this.menuToggle}
          />
        </div>
      </div>
    );
  }
}

export default Header;
