import React from 'react'
import LocallySourcedDesktop from '../assets/img/homepage/locally-sourced-desktop.jpg'
import LocallySourcedMobile from '../assets/img/homepage/locally-sourced-mobile.jpg'
import Divider from '../assets/img/patterns/pattern-divide.svg'

export const LocallySourced = () => {
    return (
        <div className="locally-sourced-container">
            <div className="inner flex justify-center main-layout">
                <div>
                    <img className="desktop" src={LocallySourcedDesktop} alt="EnjoyablePlaceDesktop" />
                    <img className="mobile" src={LocallySourcedMobile} alt="EnjoyablePlaceMobile" />
                </div>
                <div>
                    <img className="divider" src={Divider} alt="Divider" />
                    <h2 className="title">The most locally sourced food</h2>
                    <h4 className="description">All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food.</h4>
                </div>
            </div>
        </div>
    )
}
