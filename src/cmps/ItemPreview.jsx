import React from 'react'

export const ItemPreview = ({ item, imgSrc }) => {
    return (
        <div className="item-preview">
            <img src={imgSrc} alt={item.desc} />
            <h2 className="item-title">{item.title}</h2>
            <h4 className="item-description">{item.desc}</h4>
        </div>
    )
}
