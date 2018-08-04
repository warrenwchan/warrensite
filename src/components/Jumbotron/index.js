import React, { Component } from 'react'
import styles from './styles.scss'
import Slider from 'react-slick'

class Jumbotron extends Component {

  render() {
    const data = this.props.data;

    let settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
    };

    return (
      <div className="jumbotronContainer">
        <div className="overlayText">
          <h2>{data.title.text}</h2>
        </div>
        <div className="jumbotron">
          <Slider {...settings}>
            {data.jumbotron_image.map((galleryImage, i) => {
              return (
                <div className="galleryItem" key={i}>
                  <div className="galleryImage" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)),url(${galleryImage.image.url}) center / cover` }}></div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    )
  }
}

export default Jumbotron;
