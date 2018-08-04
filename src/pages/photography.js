import React from 'react'
import Photography from '../containers/Photography/'

const PhotographyPage = ({ data }) => (
  <div>
    <Photography data={data}/>
  </div>
)

export default PhotographyPage

export const query = graphql`
  query Photography {
    allPrismicPhotographyPage {
      edges {
        node {
          slugs
          data {
            title {
              text
            }
            banner_image {
              url
            }
            body {
              primary {
                album_title {
                  text
                }
                album_description {
                  text
                }
                upload_date
              }
              items {
                image {
                  url
                }
                image_title {
                  text
                }
                image_description {
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
