import React, {useState, useEffect }  from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
const ItemDetail = ({item}) => {  
    const [isClicked,setisClicked] = useState(false);
    const onAdd = (count) => {
        //alert(`Has seleccionado ${count} producto en total.-`)
        setisClicked(true);
    }
   

    return (
      <div className="row">  
      <div className="col-lg-2 col-md-2 col-sm-2"></div>
              <h4>Item Detail: {item.id} </h4>
              <div className="col-lg-3 col-md-3 col-sm-3">
                  <figure className="image is-128x128">
                  <img
                      src={item.pictureUrl}
                      alt={item.description}
                  />
                  </figure>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                  <b style={{ textTransform: "capitalize" }}>
                  {item.title}{" "}
                  <span className="tag is-primary">${item.price}</span>
                  </b>
                  <div>{item.description}</div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                 {isClicked ? <button className="btn btn-default"><Link to={'/Cart/'}  className="btn btn-warning">Terminar compra</Link></button> : <ItemCount stock={5} inicial={1} onAdd={onAdd} />}
              </div>
      </div>           
    )
}

export default ItemDetail
