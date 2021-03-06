import React from 'react'
import '../styles/design-single.scss'
import SubPage from '../containers/subpage'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom';
import PhotoGrid from '../components/PhotoGrid'

const DesignSingle = ({ data }) => {
  const single = data.prismicDesignSingle
  const album = data.prismicDesignAlbum
  console.log(single)

  const Description = (props) => (
    <section className="block desc-section">
        <div
          className="desc-photo"
          style={{ background: `url(
            ${props.photo}
          ) center / cover` }}
        ></div>
        <div className="desc-blurb">
          <p>{props.description}</p>
        </div>
      </section>
  )

  const Paragraph = (props) => (
    <section className="block paragraph-section">
      <div className="paragraph">
        <p>{props.paragraph}</p>
      </div>
    </section>
  )

  const PhotoStream = (props) => {
    console.log(props)
    return (
      <section className="block photostream-section">
        {props.photos.map((photo, i) => {
          return (
            <img src={photo.photo.url}/>
          )
        })}
      </section>
    )
  }

  return (
    <div>
      <SubPage
      title={single.data.work_name.text}
      photo={album.data.banner_photo.url}
      >
        <div className="post-info">
          <p>/ / {album.data.page_title.text}</p>
          <p>Posted on {single.first_publication_date}</p>
        </div>
        {single.data.body.map((section , i) => {
          switch(section.__typename) {
            case "PrismicDesignSingleBodyPhotoDescription":
              return <Description key={i} photo={section.primary.photo.url} description={section.primary.photo_description.text} />
            case "PrismicDesignSingleBodyPhotoGrid":
              return <PhotoGrid key={i} photos={section.items} />
            case "PrismicDesignSingleBodyParagraph":
              return <Paragraph key={i} paragraph={section.primary.paragraph.text} />
            case "PrismicDesignSingleBodySeamlessPhoto":
              return <PhotoStream key={i} photos={section.items} />
            default:
              <Loader />
              break;
          }
        })}
        <div className="post-info">
          <Link to={`/design/${album.slugs[0]}`}> Back to {album.data.page_title.text} Page </Link>
          <p>Posted on {single.first_publication_date}</p>
        </div>
      </SubPage>
    </div>
  )
};

export default DesignSingle

export const query = graphql`
  query DesignSingleQuery($slug: String!, $album: String) {
    prismicDesignSingle(slugs: { eq: $slug }) {
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
          __typename
          ... on PrismicDesignSingleBodySeamlessPhoto {
            items {
              photo {
                url
              }
            }
          }
        }
      }
    }
    prismicDesignAlbum(slugs: {eq: $album }) {
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
  }
`
