import {useState} from 'react';
import { FaRegMinusSquare,FaRegPlusSquare } from "react-icons/fa";

const ItemCount = ({stock, inicial, onAdd}) => {    
    //hook
      const [count, setItems] = useState(inicial || 1);
      
      const addItems = () => {
         count < stock ? setItems(count + 1) : alert("No hay stock");
      } 
      const restItems = () => {
         count > 1 ? setItems(count - 1) : setItems(1);
     } 
     
    return (         
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">            
               <div className="row"> 
                   <div className="col-sm-5">
                     <button onClick={restItems} className="btn btn-default"><FaRegMinusSquare/></button>
                    </div>
                    <div className="col-sm-2">
                        {count}
                    </div>
                    <div className="col-sm-5">
                    <button onClick={addItems} className="btn btn-default"><FaRegPlusSquare/></button>
                    </div>
               </div>
               <div className="row">
                 
                       <input type="button" value="Agregar al carrito" onClick={()=>onAdd(count)} />
                 
               </div>
            </div>       
            <div className="col-md-4"></div>
        </div>
                   
           ); 
  };
  export default ItemCount;