import {useState, useEffect,React} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import itemList from '../ItemList/ItemList';
import { useParams} from 'react-router-dom';
//import imagen from './assets/robo.jpg';

 const productList = [{categoryId:1, categoryName:'',
 productos:[
         {id:1, title:'Product 1', description: 'Producto One', price: 30.0, pictureUrl: "https://bulma.io/images/placeholders/128x128.png"},//require('../img/robo.jpg')
         {id:2, title:'Product 2', description: 'Producto Two', price: 40.50, pictureUrl: "https://bulma.io/images/placeholders/128x128.png"},
         {id:3, title:'Product 3', description: 'Producto Three', price: 100.00, pictureUrl: "https://bulma.io/images/placeholders/128x128.png"},
         {id:4, title:'Product 4', description: 'Producto Four', price: 200.50, pictureUrl: "https://bulma.io/images/placeholders/128x128.png"}
      ]
},
{categoryId:2, categoryName:'',
 productos:[
         {id:1, title:'Product 1', description: 'Producto One', price: 30.0, pictureUrl: "https://bulma.io/images/placeholders/128x128.png"},//require('../img/robo.jpg')
         {id:2, title:'Product 2', description: 'Producto Two', price: 40.50, pictureUrl: "https://bulma.io/images/placeholders/128x128.png"},
         {id:3, title:'Product 3', description: 'Producto Three', price: 100.00, pictureUrl: "https://bulma.io/images/placeholders/128x128.png"},
         {id:4, title:'Product 4', description: 'Producto Four', price: 200.50, pictureUrl: "https://bulma.io/images/placeholders/128x128.png"}
      ]
}];    
           

const ItemListContainer = ({greeting}) => {

   const onAdd = (product) => {
       alert(`Has seleccionado ${product} producto en total.-`)
   }
   const {id} = useParams();//idcategory
   let productList_ = (id === undefined) ?  productList : productList.filter(product => {return productList.categoryId === id});

   return (
      <div>              
                <h1><center>{greeting}</center></h1>               
                {
                   productList_.forEach((product)=>{
                     <h4><center> {id} </center></h4>                       
                      console.log(product.productos);
                      product.productos.map(prod => {                         
                          //console.log(prod);
                          return (
                           <div>
                                <itemList items={prod} /> 
                            </div>
                           );


                      });
                  })             
               
                }
               
              
              
      </div> 
   )
}

export default ItemListContainer
