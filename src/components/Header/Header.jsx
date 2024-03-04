import React from 'react'
import './Header.css';
import logo from './../../assets/img/logo.png'

const Header = () => {
  return (
    <div>
      <header className="header">
      <div className="logo">
        <a href="#"><img src={logo} /></a>
      </div>
      <nav className="nav">
        <ul>
          <a href="#">
            <li className="focused lng-home">HOME</li>
          </a>
          <a href="#">
            <li className="lng-about">ABOUT</li>
          </a>
          <a href="#">
            <li className="lng-menu">MENU</li>
          </a>
          <a href="#">
            <li className="lng-gallery">GALLERY</li>
          </a>
          <a href="#">
            <li className="lng-contact">CONTACT</li>
          </a>
        </ul>

        <div className="follow-us-burger">
          <div className="social-media-title">
            <h6>Follow Us</h6>
          </div>
          <div className="social-media-icons">
            <a href="https://www.instagram.com/beerlogariga/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/Riga.BEERloga.pub" target="_blank"><i
                className="fa-brands fa-facebook"></i></a>
          </div>
        </div>
      </nav>

      <div className="burger">
        <span></span>
      </div>
    </header>
    </div>
  )
}

export default Header