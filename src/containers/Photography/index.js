import React, { Component } from 'react'
import styles from './styles.scss'
import Prismic from 'prismic-javascript'
import scrollToElement from 'scroll-to-element'

import SubPage from '../subpage/'
import PhotoContainer from '../../components/PhotoContainer/'
import PhotoSlider from '../../components/PhotoSlider/'
import Loader from '../../components/Loader'
import photo from '../../assets/photos/_MG_9081.jpg'

class Photography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: null,
      album: 0,
    };
    this.handleToggleAlbum = this.handleToggleAlbum.bind(this);
  }

  componentWillMount() {
    const apiEndpoint = 'https://warrensite.prismic.io/api/v2';

    Prismic.api(apiEndpoint).then(api => {
      api.query(
        Prismic.Predicates.at('document.type', 'photography_page')
      ).then(response => {
        if (response) {
          this.setState({ doc: response.results[0] });
        }
      });
    });
  }

  handleToggleAlbum(albumTitle) {
    scrollToElement('#slider');
    this.setState({album: albumTitle})
  }

  render() {

    if (this.state.doc) {
      const document = this.state.doc.data;
      return (
        <div>
          <SubPage
            title={document.title[0].text}
            photo={document.body[0].items[1].image.url}
          >
            <PhotoSlider
              data={document}
              album={this.state.album}
            />
            <section className="photoGrid">
              {document.body.map((album, i) => {
                return (
                  <PhotoContainer key={i} class="photoCell" photo={album.items[0].image.url} onClick={() => (this.handleToggleAlbum(i))}>
                    <div className="cellInfo">
                      <h4>{album.primary.album_title[0].text}</h4>
                      <p>{album.upload_date}</p>
                    </div>
                  </PhotoContainer>
                )
              })}
            </section>
          </SubPage>
        </div>
      )
    }
    return (
      <Loader />
    )
  }
}

export default Photography;
