import React from 'react';
import '../styles/photography-album.scss';
import AlbumScroll from '../components/AlbumScroll';
import { Link } from 'react-router-dom';

const PhotographyAlbum = ({ data }) => {
  const albums = data.allPrismicPhotographyAlbum
  const album = data.prismicPhotographyAlbum


  return (
    <section className="album-container">
      <div className="side-column">
        <div className="album-info">
          <h2>{album.data.album_title.text}</h2>
          <p>{album.data.album_description.text}</p>
          <p>{album.first_publication_date}</p>
          {/* <Link to={}></Link> */}
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
