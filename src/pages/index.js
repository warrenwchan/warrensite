import React from 'react'
import Home from '../containers/home'

const IndexPage = ({ data }) => (
  <div>
    <Home data={data}/>
  </div>
)

export default IndexPage

export const query = graphql`
  query Home {
    allPrismicHomePage {
      edges {
        node {
          slugs
          data {
            title {
              text
            }
            jumbotron_image {
              image {
                url
              }
            }
          }
        }
      }
    }
  }
`
