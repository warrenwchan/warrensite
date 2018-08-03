import React from 'react'
import styles from '../layouts/index.scss'

import Design from '../containers/Design'

const DesignPage = ({ data }) => (
  <div>
    <Design data={data}/>
  </div>
)

export default DesignPage

export const query = graphql`
  query Design {
    allPrismicDesignPage{
      edges {
        node {
          data{
            title {
              html
              text
            }
            banner_image {
              url
            }
          }
        }
      }
    }
    allPrismicDesignAlbum (sort: {fields: [first_publication_date], order: ASC}) {
      edges {
        node {
          id
          slugs
          first_publication_date
          data {
            banner_photo {
              url
            }
            page_title {
              text
            }
          }
        }
      }
    }
    allPrismicDesignSingle (sort: {fields: [first_publication_date], order: DESC}) {
      edges {
        node {
          data {
            album
            work_name {
              text
            }
            body {
              __typename
              ... on PrismicDesignSingleBodyPhotoDescription {
                primary {
                  photo {
                    url
                  }
                  photo_description {
                    text
                  }
                }
              }
              __typename
              ... on PrismicDesignSingleBodyPhotoGrid {
                items {
                  photo {
                    url
                  }
                }
              }
              __typename
              ... on PrismicDesignSingleBodyParagraph {
                primary {
                  paragraph {
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
