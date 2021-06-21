import { react,useState, useEffect } from 'react';
import Item from '../Item/Item';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import 'react-bulma-components';

const ItemList = ({items}) => {
    const [productos,setProductos] = useState(items);

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
           <h1><center>Lista de Productos</center></h1>
           
              {
               productos.map((item,i) => {
                console.log(item);
                return (
                      <div className="container">  
                        <div className="row">                    
                            <div className="col-md-6">

                                <Item key={item.id} item={item} />
                            </div>
                            <div className="col-md-6">
                                <ItemDetailContainer key={item.i} item={item}  /> 
                            </div>
                        </div>   
                     </div>       
                     );                   
               })
            }

          
             
        </div>
    )
}

export default ItemList
