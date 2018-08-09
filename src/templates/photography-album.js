import React from 'react';
import '../styles/photography-album.scss';
import AlbumScroll from '../components/AlbumScroll';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const PhotographyAlbum = ({ data }) => {
  const albums = data.allPrismicPhotographyAlbum
  const album = data.prismicPhotographyAlbum
  let next
  let prev

  const thisPage = data.prismicPhotographyAlbum.slugs[0]

  albums.edges.map((albumData, i) => {
    let mappedAlbumSlug = albumData.node.slugs[0]
    if (thisPage === mappedAlbumSlug) {
      albums.edges[i+1] ? next = albums.edges[i+1].node.slugs[0] : null;
    } else (null)
  })

  albums.edges.map((albumData, i) => {
    let mappedAlbumSlug = albumData.node.slugs[0]
    if (thisPage === mappedAlbumSlug) {
      albums.edges[i-1] ? prev = albums.edges[i-1].node.slugs[0] : null;
    } else (null)
  })

  return (
    <section className="album-container">
      <div className="side-column">
        <div className="album-info">
          <h2>{album.data.album_title.text}</h2>
          <p>{album.data.album_description.text}</p>
          <p>{album.first_publication_date}</p>
        </div>
        <div className="album-pagination">
          {prev ? <Link to={prev}><FontAwesomeIcon className="pagination-icon" icon="angle-left" size="1x"/>Previous Album</Link> : null}
          {next ? <Link to={next}>Next Album<FontAwesomeIcon className="pagination-icon" icon="angle-right" size="1x"/> </Link> : null}
        </div>
      </div>
      <div className="album-scroll">
        <AlbumScroll photos={album.data.body[0].items} />
      </div>
    </section>
  )
}

export default PhotographyAlbum;

export const query = graphql`
  query PhotographyAlbum($slug: String!) {
    prismicPhotographyAlbum(slugs: { eq: $slug }) {
      slugs
      first_publication_date (formatString: "MMMM DD, YYYY")
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
