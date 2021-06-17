import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <div>
          <h2>TITULO DEL PRODUCTO</h2>
          <div className="row">
            <div className="col-md-6">
              
              <img src="./src/img/robo.jpg" width="100" height="200"/>
            </div>
            <div className="col-md-6">
                <h3><p>Precio: 300.00</p></h3>
                <h4><p>El producto esta diseñado con la última tecno...</p></h4>
            </div>
          </div>
          
        </div>
    )
}

export default ItemDetail
