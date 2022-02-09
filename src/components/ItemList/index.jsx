import Item from '../Item'
import React from 'react'

const ItemList = ({items}) => {

    return(
        <>
            {items.map((item) => {
                return <Item key={item.id} item={item}/>
            })}
        </>
    )
}

export default ItemList





