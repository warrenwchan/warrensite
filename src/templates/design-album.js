import React from 'react';
import '../styles/design-album.scss';
import { Link } from 'react-router-dom';
import SubPage from '../containers/subpage';
import PhotoContainer from '../components/PhotoContainer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const DesignAlbums = ({ data }) => {
  const albums = data.prismicDesignAlbum;
  const single = data.allPrismicDesignSingle;

  // Takes prismic single data and filters the data corresponding to slug of page
  var filteredSingles = single.edges.filter( work => work.node.data.album === albums.data.slug.text );

  return(
    <SubPage
      title={albums.data.page_title.text}
      photo={albums.data.banner_photo.url}
      >
      <section>
        {filteredSingles.length > 0 ?
          <div className='album-grid'>
            {filteredSingles.map((gridItem, i) => {
              return (
                <Link to={`${albums.slugs[0]}/${gridItem.node.slugs[0]}`} key={i}>
                  <PhotoContainer
                    class="grid-item"
                    photo={`${gridItem.node.data.body[0].__typename === "PrismicDesignSingleBodyPhotoGrid" ?
                    gridItem.node.data.body[0].items[0].photo.url :
                    gridItem.node.data.body[0].primary.photo.url }`}
                  >
                    <div className="grid-content">
                      <h2 className="album-name">{gridItem.node.data.work_name.text}</h2>
                      <p className="album-data">{gridItem.node.first_publication_date}</p>
                    </div>
                  </PhotoContainer>
                </Link>
              )
            })}
          </div>
          :
          <div className="no-post">
            <h2>No post availible at the moment.</h2>
            <Link to="/design/">Back to Design page</Link>
          </div>
        }
        <div className="post-info">
          <Link to="/design/"><FontAwesomeIcon className="pagination-icon" icon="angle-left" size="1x"/> Back to Design page</Link>
        </div>
      </section>
    </SubPage>
  )
};

export default DesignAlbums

export const query = graphql`
  query DesignAlbumQuery($slug: String!) {
    prismicDesignAlbum(slugs: { eq: $slug }) {
      slugs
      data{
        banner_photo {
          url
        }
        page_title {
          text
        }
        slug {
          text
        }
        description{
          text
        }
      }
    }
    allPrismicDesignSingle (sort: {fields: [first_publication_date], order: DESC},) {
      edges {
        node {
          slugs
          first_publication_date (formatString: "MMMM DD, YYYY")
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
