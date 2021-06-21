import React from 'react'
import '../../../src/Components/Item/Item.css';

const Item = ({item}) => {
    return (
     <div className="column is-half">
         <div className="box">
           <div className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                <img
                    src="https://bulma.io/images/placeholders/128x128.png"
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

export default Item
