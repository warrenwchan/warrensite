import React from 'react'
import styles from '../layouts/index.scss'

import Home from '../containers/home'

const IndexPage = () => (
  <div>
    <Home/>
    <input type="hidden" name="contact" value="contact" />
  </div>
)

export default IndexPage
