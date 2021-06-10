import { react,useState, useEffect } from 'react';
import { FaRegMinusSquare,FaRegPlusSquare,FaTachometerAlt  } from "react-icons/fa";

const ItemCount = ({stock, inicial, onAdd}) => {
    //hook
      const [items, setItems] = useState(inicial);
      
      const addItems = () => {
         items < stock ? setItems(items + 1) : alert("No hay stock");
      } 
      const restItems = () => {
        items > 1 ? setItems(items - 1) : setItems(1);
     } 
     
    return (         
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
               <div className="row">              
                  <h1> PRODUCTO </h1>
               </div>
               <div className="row"> 
                   <div className="col-sm-4">
                     <button onClick={restItems} className="btn btn-default"><FaRegMinusSquare/></button>
                    </div>
                    <div className="col-sm-4">
                        {items}
                    </div>
                    <div className="col-sm-4">
                    <button onClick={addItems} className="btn btn-default"><FaRegPlusSquare/></button>
                    </div>
               </div>
               <div className="row">
                 
                       <input type="button" value="Agregar al carrito" onClick={()=>onAdd(items)} />
                 
               </div>
            </div>       
            <div className="col-md-4"></div>
        </div>
                   
           ); 
  };
  export default ItemCount;