import  { react,useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

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
        <div>
            <h1>Detalle del Producto</h1>
           <div>             
                <ItemDetail item={item} />
          </div> 

        </div>
    )
}

export default ItemDetailContainer
