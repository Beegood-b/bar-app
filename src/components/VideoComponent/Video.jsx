import React from 'react'
import './Video.css'
import covervid from './../../assets/img/main-vid.mp4'

const Video = () => {
  return (
    <>
      <div className="video">
        <video loop muted autoPlay>
          <source src={covervid} type="video/mp4" />
        </video>
      </div>

      <div className="heading">
        <h1>
          Welcome <br />
          To<br />
          BEERloga
        </h1>
      </div>
      </>
  )
}

export default Video