import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {
   const onAdd = (items) => {
       alert(`Has seleccionado ${items} producto en total.-`)
   }
   return (
      <div className="container">
               <h3>{greeting}</h3> 
               
               <ItemCount stock={5} inicial={1} onAdd={onAdd} /> 
      </div> 
   )
}

export default ItemListContainer
