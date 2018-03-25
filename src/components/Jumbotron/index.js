import React, { Component } from 'react'
import styles from './styles.scss'
import Slider from 'react-slick'

import bg from '../../assets/photos/_MG_9081.jpg'

class Jumbotron extends Component {

  render() {
    const document = this.props.doc

    let settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
    };

    return (
      <Slider {...settings}>
        {document.jumbotron_image.map((galleryImage, i) => {
          return (
            <div className="galleryItem" key={i}>
              <div className="galleryImage" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)),url(${galleryImage.image.url}) center / cover` }}></div>
            </div>
          )
        })}
      </Slider>
    )
  }
}

export default Jumbotron;
