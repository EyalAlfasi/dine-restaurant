import React from 'react'
import Divider from '../assets/img/patterns/pattern-divide.svg'
import { ItemsList } from './ItemsList'

export const Menu = () => {
    return (
        <div className="menu-container main-layout">
            <div>
                <img className="divider" src={Divider} alt="Divider" />
                <h2 className="title">A few highlights from our menu</h2>
                <h4 className="description">We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</h4>
            </div>
            <ItemsList />
        </div>
    )
}
