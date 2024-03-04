import React from 'react'
import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


export const Button = () => {
  return (
    <div className="button animate__animated animate__fadeIn animate__delay-1s">
      <a href="#">
        <div className="btn-main">
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </a>
    </div>
  )
}

export default Button;