import React from 'react'


const ItemDetail = ({item}) => {
  console.log(item.pictureUrl);
    return (
            <div className="column is-half">
              <h4>Item Detail</h4>
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
