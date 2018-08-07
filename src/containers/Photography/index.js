import React, { Component } from 'react'
import styles from './styles.scss'
import SubPage from '../subpage/'
import PhotoContainer from '../../components/PhotoContainer/'
import { Link } from 'react-router-dom';

class Photography extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const photoPage = this.props.data.allPrismicPhotographyPage.edges[0].node.data
    const photoAlbums = this.props.data.allPrismicPhotographyAlbum.edges

    return (
      <section>
        <SubPage
          title={photoPage.title.text}
          photo={photoPage.banner_image.url}
        >
          <section className="photoGrid">
            {photoAlbums.map((album, i) => (
              <Link to={album.node.slugs[0]} key={i}>
                <PhotoContainer class="photoCell" photo={album.node.data.body[0].items[0].photo.url}>
                  <div className="cellInfo">
                    <h3>{album.node.data.album_title.text}</h3>
                    <p>{album.node.first_publication_date}</p>
                  </div>
                </PhotoContainer>
              </Link>
            ))}
          </section>
        </SubPage>
      </section>
    )
  }
}

export default Photography;
