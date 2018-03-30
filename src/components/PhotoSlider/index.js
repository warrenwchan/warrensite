import React, { Component } from 'react'
import styles from './styles.scss'
import Slider from 'react-slick'

import PhotoContainer from '../PhotoContainer/'
import NextArrow from '../NextArrow/'
import PrevArrow from '../PrevArrow/'

class PhotoSlider extends Component {
  render() {
    const document = this.props.data

    let settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      initialSlide: 0,
      nextArrow: <NextArrow className="nextButton"/>,
      prevArrow: <PrevArrow className="prevButton"/>
    };

    return (
      <section className="imageSlider">
        <div className="sliderTitle">
          <h2>Album Collections</h2>
        </div>
        <div id="slider">
          <Slider {...settings} className="photographySlider">
            {document.body[this.props.album].items.map((photo, i) => {
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
    )
  }
}

export default PhotoSlider;
