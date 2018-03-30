import React from 'react'
import styles from './styles.scss'

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

export default NextArrow;
