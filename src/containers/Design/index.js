import React, { Component } from 'react'
import styles from './styles.scss'
import { Link } from 'react-router-dom';

import SubPage from '../subpage'
import PhotoContainer from '../../components/PhotoContainer';

class Design extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const page = this.props.data.allPrismicDesignPage.edges[0].node.data;
    const albums = this.props.data.allPrismicDesignAlbum.edges;

    return(
      <SubPage
        title={page.title.text}
        photo={page.banner_image.url}
      >
        <section className="projectCategoryContainer">
          {albums.map((album, i) => (
            <Link to={album.node.slugs[0]} key={i}>
              <PhotoContainer
                class='projectCategory'
                photo={album.node.data.banner_photo.url}
                id={i}
                key={i}
              >
                <h2>{album.node.data.page_title.text}</h2>
              </PhotoContainer>
            </Link>
          ))}
        </section>
      </SubPage>
    )
  };
};

export default Design;
