import React, { Component } from 'react'
import styles from './styles.scss'
import Link from 'gatsby-link'
import Slider from 'react-slick'
import Prismic from 'prismic-javascript'
import scrollToElement from 'scroll-to-element'

import SubPage from '../subpage/'
import PhotoContainer from '../../components/PhotoContainer/'
import Loader from '../../components/Loader'
import photo from '../../assets/photos/_MG_9081.jpg'

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', width: '10%', height: '100%', zIndex: '9', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', width: '10%', height: '100%', zIndex: '9', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
      onClick={onClick}
    ></div>
  );
}

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
    let settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      initialSlide: 0,
      nextArrow: <NextArrow className="nextButton"></NextArrow>,
      prevArrow: <PrevArrow className="prevButton"></PrevArrow>
    };

    if (this.state.doc) {
      const document = this.state.doc.data;
      console.log(document)
      return (
        <div>
          <SubPage
            title={document.page_title[0].text}
            photo={document.body[0].items[1].image.url}
          >

            <section className="imageSlider">
              <div className="sliderTitle">
                <h2>Album Collections</h2>
              </div>
              <div id="slider">
                <Slider {...settings} className="photographySlider">
                  {document.body[this.state.album].items.map((photo, i) => {
                    return (
                      <div key={i}>
                        <PhotoContainer
                          class="sliderImg"
                          photo={photo.image.url}
                        >
                          <div className="sliderImgInfo">
                            <h2>{photo.image_title[0].text}</h2>
                            <p>{photo.image_description[0].text}</p>
                          </div>
                        </PhotoContainer>
                      </div>
                    )
                  })}
                </Slider>
              </div>
            </section>

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
