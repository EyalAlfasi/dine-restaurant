import React from 'react'
import { EnjoyablePlace } from '../cmps/EnjoyablePlace'
import { Hero } from '../cmps/Hero'
import { LocallySourced } from '../cmps/LocallySourced'
import { Menu } from '../cmps/Menu'

export const Home = () => {
    return (
        <div className="main-home-container">
            <Hero />
            <EnjoyablePlace />
            <LocallySourced />
            <Menu />
        </div>
    )
}
