import React from 'react'
import styles from './styles.scss'

const Loader = () => {
  return (
    <div className="loaderContain">
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    </div>
  )
}

export default Loader
