import { react,useState, useEffect } from 'react';
import Item from '../Item/Item';


const ItemList = ({items}) => {
    const [productos,setProductos] = useState([items]);

    useEffect(() =>{
        const promises = new Promise((resolve, reject) => {
            setTimeout(() => {
                items.length > 0 ? resolve(items): reject("No hay productos");
            }      
            ,2000);
        })
        promises.then((data) => {
            console.log('datos: ' + data);
            setProductos(data);
         })
        .catch((err) => {
            console.log(err);
        })
        .finally((response) =>console.log(response))    
    },[]) 

    return (
        <div>
           <h1>Lista de Productos</h1>
           <div>
              {
               productos.map((item) => {
                console.log(item);
                return ( 
                        <Item key={item.id} item={item} />
                    );                   
               })
            }

          
          </div>     
        </div>
    )
}

export default ItemList
