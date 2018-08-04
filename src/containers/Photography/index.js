import React, { Component } from 'react'
import styles from './styles.scss'
import scrollToElement from 'scroll-to-element'
import SubPage from '../subpage/'
import PhotoContainer from '../../components/PhotoContainer/'
import PhotoSlider from '../../components/PhotoSlider/'

class Photography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: 1,
    }
    this.handleToggleAlbum = this.handleToggleAlbum.bind(this);
  }

  handleToggleAlbum(albumTitle) {
    scrollToElement('#slider');
    this.setState({album: albumTitle})
  }

  render() {
    const photo = this.props.data.allPrismicPhotographyPage.edges[0].node.data

    return (
      <section>
        <SubPage
          title={photo.title.text}
          photo={photo.body[0].items[1].image.url}
        >
          <PhotoSlider
            data={photo}
            album={this.state.album}
          />
          <section className="photoGrid">
            {photo.body.map((album, i) => (
              <PhotoContainer key={i} class="photoCell" photo={album.items[0].image.url} onClick={() => (this.handleToggleAlbum(i))}>
                <div className="cellInfo">
                  <h4>{album.primary.album_title.text}</h4>
                  <p>{album.upload_date}</p>
                </div>
              </PhotoContainer>
            ))}
          </section>
        </SubPage>
      </section>
    )
  }
}

export default Photography;
