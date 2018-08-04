import React from 'react'
import DevPage from '../containers/Dev/'

const Dev = ({ data }) => (
  <div>
    <DevPage data={data}/>
  </div>
)

export default Dev

export const query = graphql`
  query Dev {
    allPrismicDevPage{
      edges {
        node {
          slugs
          data {
            title {
              text
            }
            banner {
              url
            }
            body {
              primary {
                title {
                  text
                }
                description {
                  text
                }
                blurb {
                  text
                }
                tech {
                  text
                }
                url {
                  url
                }
                image {
                  url
                }
                icon {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`
