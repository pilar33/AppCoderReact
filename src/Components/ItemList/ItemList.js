import { react,useState, useEffect } from 'react';
import Item from '../Item/Item';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import 'react-bulma-components';

const ItemList = ({items}) => {
    console.log(items);
    const [productos,setProductos] = useState(items);

    useEffect(() =>{
        const promises = new Promise((resolve, reject) => {
            setTimeout(() => {
                items.length > 0 ? resolve(items): reject("No hay productos");
            }      
            ,2000);
        })
        promises.then((data) => {
            console.log('datos ItemList: ' + data);
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
               productos.map((item) => {
                console.log(item);
                return (
                      <div className="container">  
                        <div className="row">                    
                            <div className="col-md-6">

                                <Item key={item.id} item={item} />
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
