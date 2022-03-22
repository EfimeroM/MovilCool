import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCarrousel.scss';

const ItemCarrousel = ({producto}) => {
  const {id, nombre, precio, almacenamiento, imageUrl, color, categoria} = producto;

  return (
    <div id='item-card-container-carrousel'>
        <div className='item-card-info'>
            <div className='image'>
                <img src={imageUrl} alt={nombre} />
            </div>
            <h1>{nombre}</h1>
            {
                almacenamiento?
                <div>
                    <h2>{almacenamiento} gb -</h2>
                    <h2> {color}</h2>
                </div>
                :
                <div>
                    <h2>{color}</h2>
                </div>
            }
        </div>
        <div className='item-card-ver'>
            <div className='item-blue'>
            </div>
            <div className='item-transparente'>
                <Link to={`/detalle/${id}`} className='link'><h2>Ver producto</h2></Link>
            </div>
        </div>
    </div>
  )
}

export default ItemCarrousel;