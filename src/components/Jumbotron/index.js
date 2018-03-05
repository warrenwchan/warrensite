import React from 'react'
import styles from './styles.scss'

import photo from '../../assets/photos/_MG_9081.jpg'

const Jumbotron = (props) => {
  const document = props.doc
  return (
    <div className="jumbotronContainer">
      <img src={photo} alt="jumbotron image" />
    </div>
  )
}

export default Jumbotron;
