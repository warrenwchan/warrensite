import React from 'react'
import styles from '../layouts/index.scss'

import Design from '../containers/Design/'

const DesignPage = ({ data }) => (
  <div>
    <Design
      data={data}
    />
  </div>
)

export default DesignPage

export const query = graphql`
  query DesignQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
