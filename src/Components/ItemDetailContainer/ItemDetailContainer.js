import  {useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams} from 'react-router-dom';




const ItemDetailContainer = () => {
  /*   const {item} = useParams();
    console.log(item);
    const [detailItem,setItem] = useState();
    
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
    },[])  */

    return (
        <div>
               {/*  <ItemDetail item={detailItem} />  */}         
               {console.log('hace algo')}
        </div>
    )
}

export default ItemDetailContainer
