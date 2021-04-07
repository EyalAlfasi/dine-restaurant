import React from 'react'
import EnjoyablePlaceDesktop from '../assets/img/homepage/enjoyable-place-desktop.jpg'
import EnjoyablePlaceMobile from '../assets/img/homepage/enjoyable-place-mobile.jpg'
import Divider from '../assets/img/patterns/pattern-divide.svg'

export const EnjoyablePlace = () => {
    return (
        <div className="enjoyable-place-container main-layout">
            <div className="inner flex justify-center">
                <div>
                    <img className="desktop" src={EnjoyablePlaceDesktop} alt="EnjoyablePlaceDesktop" />
                    <img className="mobile" src={EnjoyablePlaceMobile} alt="EnjoyablePlaceMobile" />
                </div>
                <div>
                    <img className="divider" src={Divider} alt="Divider" />
                    <h2 className="title">Enjoyable place for all the family</h2>
                    <h4 className="description">Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal.</h4>
                </div>
            </div>
        </div>
    )
}
