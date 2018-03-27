import React from 'react';

const PhotoContainer = (props) => {
  return (
    <div
      className={props.class}
      style={{ background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.8) 90%) ,url(${props.photo}) center / cover` }}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export default PhotoContainer
