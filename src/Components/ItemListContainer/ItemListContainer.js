import React,{useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { useParams} from 'react-router-dom';
//import productList from '../../../src/data/productos.json';
import imagen1 from '../../img/auriculares.webp';
import imagen2 from '../../img/motog9.webp';
import imagen3 from '../../img/galaxiA32.webp';
import imagen4 from '../../img/cableOTG.webp';
import imagen5 from '../../img/notebookPCBOX.webp';
import imagen6 from '../../img/notebookLenovo.webp';
import imagen7 from '../../img/notebookDell.webp';
import imagen8 from '../../img/notebookBangho.webp';

let productList = [{categoryId:1, categoryName:'categoria 1',
productos:[
        {id:1, title:'Auricular Aur-008', description: 'Auricular Aur-008 con micrófono', price: 3500.000, pictureUrl: imagen1 },
        {id:2, title:'Moto G9', description: 'Moto G9 Power 128 GB morado sónico 4 GB RAM', price: 35000.999, pictureUrl: imagen2},
        {id:3, title:'Samsung Galaxy A32', description: 'Samsung Galaxy A32 128 GB awesome black 4 GB RAM', price: 44000.999, pictureUrl: imagen3},
        {id:4, title:'Cable Otg', description: 'Cable Otg V8 Acc-005', price: 199.000, pictureUrl: imagen4}
     ]
},
{categoryId:2, categoryName:'categoria 2',
productos:[
        {id:5, title:'Notebook Pcbox', description: 'Notebook Pcbox Fire PCB-GLW1 gris 14.1", Intel Celeron N4000 4GB de RAM 64GB SSD, Intel UHD Graphics 600 1920x1080px Windows 10 Home', price: 37000.999, pictureUrl: imagen5},//require('../img/robo.jpg')
        {id:6, title:'Notebook Lenovo', description: 'Notebook Lenovo IdeaPad 14IIL05 platinum gray 14", Intel Core i5 1035G1 8GB de RAM 512GB SSD, Intel UHD Graphics 1920x1080px Windows 10 Home', price: 91080.000, pictureUrl: imagen6},
        {id:7, title:'Notebook Dell', description: 'Notebook Dell Inspiron 3505 gris 15.6", AMD Ryzen 5 3450U 8GB de RAM 256GB SSD, AMD Radeon Vega 8 1366x768px Windows 10 Home', price: 97999.000, pictureUrl: imagen7},
        {id:8, title:'Notebook Banghó', description: 'Notebook Banghó MAX L4 i1 negra 14", Intel Celeron N4000 4GB de RAM 120GB SSD, Intel UHD Graphics 600 1366x768px Windows 10 Home', price: 48950.000, pictureUrl: imagen8}
     ]
}]; 

const ItemListContainer = ({greeting}) => {
   const onAdd = (product) => {
       alert(`Has seleccionado ${product} producto en total.-`)
   }
   const {id} = useParams();//idcategory
   const productCategoryList = productList.filter((producto) => {if (producto.categoryId == id) { return producto.productos }});

   const [itemList,setItem] = useState(productCategoryList);
   
   useEffect(() =>{
      const promises = new Promise((resolve, reject) => {
        setTimeout(() => {
                     resolve(productCategoryList);                  
                 }      
                ,2000);
        })
      promises.then((data) => {         
        setItem(data);
       })
      .catch((err) => {
          console.log(err);
      })
      .finally((response) =>console.log(response))    
  },[id]);
 
  return (
         <div>
            <h1><center>{greeting}</center></h1>            
             {        
               itemList.map((item,i) => <ItemList key={i} items={item.productos} />)
             
             }
           
         </div>
   );
 }


export default ItemListContainer
