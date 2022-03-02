import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({producto}) => {
  const {id, nombre, precio, almacenamiento, imageUrl, color, categoria} = producto;

  return (
    <div className='item-card-box'>
      <section className="item-card">
        <figure className="item-card__cell_info">
          <img className="item-cell_info__img" src={imageUrl} alt="nombre"/>
          <figcaption className="item-cell_info__name">{nombre}</figcaption>
          {
          almacenamiento ?
            <figcaption className="item-cell_info__characteristics">{almacenamiento} gb - {color}</figcaption>
            :
            <figcaption className="item-cell_info__characteristics">{color}</figcaption>  
          }
        </figure>
        <div className="item-card__view">
          <Link to={`/detalle/${id}`}><button>Ver producto</button></Link>
        </div>
      </section>
    </div>
  )
}

export default Item;