import React from 'react'
import { itemService } from '../services/item-service'
import { ItemPreview } from './ItemPreview'
import MenuItem1 from '../assets/img/homepage/menu-items/menu-item1.jpg'
import MenuItem2 from '../assets/img/homepage/menu-items/menu-item2.jpg'
import MenuItem3 from '../assets/img/homepage/menu-items/menu-item3.jpg'
const images = [MenuItem1, MenuItem2, MenuItem3]

export const ItemsList = () => {
    const items = itemService.getItems()
    return (
        <div className="items-list">
            {items.map((item, idx) => {
                return <ItemPreview key={idx} item={item} imgSrc={images[idx]} />
            })}
        </div>
    )
}
