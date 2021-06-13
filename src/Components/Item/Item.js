import React from 'react'
import '../../../src/Components/Item/Item.css';

const Item = ({item}) => {
    return (
        <div className="divItem">
           <p>id: {item.id} </p>
           <p>title: {item.title} </p>
           <p>price: {item.price}</p>
           <p>price: {item.description}</p>
           <p>pictureUrl: {item.pictureUrl}</p> 
           
        </div>
    )
}

export default Item
