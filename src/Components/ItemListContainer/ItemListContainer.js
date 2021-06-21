import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
//import imagen from './assets/robo.jpg';

const productList = [{id:1, title:'Product 1', description: 'Producto One', price: 30.0, pictureUrl: "https://bulma.io/images/placeholders/128x128.png"},//require('../img/robo.jpg')
                     {id:2, title:'Product 2', description: 'Producto Two', price: 40.50, pictureUrl: "https://bulma.io/images/placeholders/128x128.png"},
                     {id:3, title:'Product 3', description: 'Producto Three', price: 100.00, pictureUrl: "https://bulma.io/images/placeholders/128x128.png"},
                     {id:4, title:'Product 4', description: 'Producto Four', price: 200.50, pictureUrl: "https://bulma.io/images/placeholders/128x128.png"}];                   
//const ItemListContainer = ({greeting}) => {
const ItemListContainer = () => {
   const onAdd = (product) => {
       alert(`Has seleccionado ${product} producto en total.-`)
   }
  
   return (
      <div className="container">
               {/* <h3>{greeting}</h3>  */}
               
              {/*  <ItemCount stock={5} inicial={1} onAdd={onAdd} />  */}
               <ItemList items={productList} /> 
              
      </div> 
   )
}

export default ItemListContainer
