import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import grid from '../assets/white-Grid.svg'
import './index.scss'

import fontawesome from '@fortawesome/fontawesome'
import brands, { faGit } from '@fortawesome/fontawesome-free-brands'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import faBars from '@fortawesome/fontawesome-free-solid/faBars'
import faCaretDown from '@fortawesome/fontawesome-free-solid/faCaretDown'
import faCaretRight from '@fortawesome/fontawesome-free-solid/faCaretRight'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import faCamera from '@fortawesome/fontawesome-free-solid/faCamera'
import faCode from '@fortawesome/fontawesome-free-solid/faCode'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'


fontawesome.library.add(faTimes, faBars, faCaretDown, faCaretRight, faPencilAlt, faCamera, faCode, faInstagram, faGithub)

const TemplateWrapper = ({ children }) => (
  <div className="templateWrapper" style={{position: `relative`, background: `url(${grid})`, backgroundAttachment: `fixed`}}>
    <Helmet
      title="Warren's Portfolio"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
