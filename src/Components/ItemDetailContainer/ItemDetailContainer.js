import  {useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { container, columns } from 'react-bulma-components';

const ItemDetailContainer = ({item}) => {

    const [detailItem,setItem] = useState([item]);

    useEffect(() =>{
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(item);
            }      
            ,2000);
        })
        getItems.then((data) => {
            console.log('datos: ' + data);
            setItem(data);
         })
        .catch((err) => {
            console.log(err);
        })
        .finally((response) =>console.log(response))    
    },[]) 

    return (
        <div className="container">
           <div className="column columns is-multiline">             
                <ItemDetail item={detailItem} /> 
           </div> 
        </div>
    )
}

export default ItemDetailContainer
