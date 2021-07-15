import React, {useState, useEffect }  from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {  
/*     console.log(item);
    const [itemDetail,setItemDetail] = useState({item});
    useEffect(() =>{        
        const promises= new Promise((resolve, reject) => {
           setTimeout(() => {               
                resolve({item});
           }      
            ,2000);
        })       
        promises.then((data) => {
          
            setItemDetail(data);
          
         })
        .catch((err) => {
            console.log(err);
        })
        .finally((response) =>console.log(response))    
    },[])  */ 
    return (
      <div className="row">  
      <div className="col-lg-2 col-md-2 col-sm-2"></div>
              <h4>Item Detail: {item.id} </h4>
              <div className="col-lg-4 col-md-4 col-sm-4">
                  <figure className="image is-128x128">
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
                  <div>{item.description}</div>
              </div>
      </div>           
    )
}

export default ItemDetail
