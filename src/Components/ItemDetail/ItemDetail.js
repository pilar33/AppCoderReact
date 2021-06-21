import React from 'react';
import { useParams} from 'react-router-dom';


const ItemDetail = ({item}) => {  
  const {id} = useParams();
    return (
            <div className="column is-half">
              <h4>Item Detail: {id} </h4>
            <div className="box">
              <div className="media">
              <div className="media-left">
                  <figure className="image is-64x64">
                  <img
                      src={item.pictureUrl}
                      alt={item.description}
                  />
                  </figure>
              </div>
              <div className="media-content">
                  <b style={{ textTransform: "capitalize" }}>
                  {item.title}{" "}
                  <span className="tag is-primary">${item.price}</span>
                  </b>
                  <div>{item.description}</div>
              </div>
            </div> 
          </div>
        </div>
    )
}

export default ItemDetail
