import {useState, useEffect,React} from 'react';
import '../../../src/Components/Item/Item.css';
import {Link} from 'react-router-dom';

const Item = ({item}) => {
    const style = {
        color: 'coral'
      };
   
    
    const [itemDetalle,setItemDetalle] = useState({item});
    useEffect(() =>{
        const promisesItem= new Promise((resolve, reject) => {
           setTimeout(() => {               
                resolve({item});
           }      
            ,2000);
        })
        promisesItem.then((data) => {
               
            setItemDetalle(data);
          
         })
        .catch((err) => {
            console.log(err);
        })
        .finally((response) =>console.log(response))    
    },[])  

    return (
   <div className="row">  
          <div className="col-lg-2 col-md-2 col-sm-2"></div>
           <div className="col-lg-4 col-md-4 col-sm-4">
                <figure className="image is-64x64">
                <img
                    src={item.pictureUrl}
                    alt={item.description}
                />
                </figure>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
                <b style={{ textTransform: "capitalize" }}>
                {item.title}{" "}
                <span className="tag is-primary">${item.price}</span>
                </b>
                <div><Link style={style} title="Ver detalle del producto" to={'/ItemDetailContainer/' + item.id}>{item.description}</Link></div>
           </div>
           <div className="col-lg-2 col-md-2 col-sm-2"></div>
     </div> 
        
    )
}

export default Item
