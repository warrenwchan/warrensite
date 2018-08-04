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
          }
        }
      }
    }
    allPrismicPhotographyAlbum {
      edges {
        node {
          first_publication_date (formatString: "MMMM DD, YYYY")
          slugs
          data {
            album_title {
              text
            }
            album_description {
              text
            }
            body {
              items {
                photo {
                  url
                }
                description {
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
