import React from 'react'
import Link from 'gatsby-link'

import Contact from '../containers/Contact/'

const ContactPage = ({ data }) => (
  <div>
    <Contact data={data}/>
  </div>
)

export default ContactPage

export const query = graphql`
  query ContactPage {
    allPrismicContactPage {
      edges {
        node {
          data {
            title {
              text
            }
            banner {
              url
            }
            body {
              primary {
                platforms
                link {
                  url
                }
                tag {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`
