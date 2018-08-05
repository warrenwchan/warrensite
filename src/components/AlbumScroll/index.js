import React, { Component } from 'react';
import './styles.scss';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

class AlbumScroll extends Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    let photoArr = []
    this.props.photos.map((photo, i) => {
      photoArr.push({src: photo.photo.url, alt: photo.description.text, width: 2, height: 1,})
      return photoArr
    })

    return (
      <section className="album-scroll-container" style={{width: `100%`, minHeight: `100%`}}>
        <Gallery photos={photoArr} onClick={this.openLightbox} direction="column" columns="1"/>
        <Lightbox
          images={photoArr}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </section>
    );
  }
}

export default AlbumScroll;
