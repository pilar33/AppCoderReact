import {useState, useEffect } from 'react';
import Item from '../Item/Item';
//import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import 'react-bulma-components';

const ItemList = ({items}) => {

    const [productos,setProductos] = useState({items});

    useEffect(() =>{
        const promisesItemList = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({items});
            }      
            ,2000);
        })
        promisesItemList.then((data) => {
                console.log('datos ItemList: ' + data);           
                 console.log(data); 
                 
                setProductos(data);
          
         })
        .catch((err) => {
            console.log(err);
        })
        .finally((response) =>console.log(response))    
    },[])  

    return (
        <div>
            {
              items.map((product) =>  <Item key={product.id} item={product} />)
            }         
        </div>
    )
}

export default ItemList
