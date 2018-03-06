import React from 'react'
import styles from './styles.scss'
import { Carousel } from 'react-responsive-carousel';

import bg from '../../assets/photos/_MG_9081.jpg'

const Jumbotron = (props) => {
  const document = props.doc
  return (
    <div className="jumbotronContainer">
      <div className="overlayText">
        <h2>WARREN CHAN</h2>
      </div>
      <div className="jumbotron">
        <div className="galleryItem" style={{ background: `url(${bg}) center / cover` }}></div>
      </div>
    </div>
    // <Carousel autoPlay interval={5000} infiniteLoop useKeyboardArrows >
    //   {console.log(document.jumbotron_image)}
    //   {document.jumbotron_image.map((galleryImage, i) => {
    //     return (
    //       <div className="galleryItem" key={i}>
    //       {console.log('hello')}
    //         {/* <div className="galleryImage" style={{ background: `url(${galleryImage.image.url}) center / cover` }}></div> */}
    //       </div>
    //     )
    //   })}
    // </Carousel>
  )
}

export default Jumbotron;
