import React from 'react'
import logo from '../assets/img/logo.svg'

export const Hero = () => {
    return (
        <div className="hero-container flex column main-layout">
            <img className="logo" src={logo} alt="dine logo" />
            <h2 className="title">Exquisite dining <br /> since 1989</h2>
            <h4 className="description">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</h4>
            <button className="cta-button">BOOK A TABLE</button>
        </div>
    )
}
