import React from 'react';
import './Item.css';

const Item = ({producto}) => {
  const {id, nombre, precio, almacenamiento, imageUrl, color, categoria} = producto;

  return (
    <section className="item-card">
      <figure className="item-card__cell_info">
        <img className="item-cell_info__img" src={imageUrl} alt="nombre"/>
        <figcaption className="item-cell_info__name">{nombre}</figcaption>
        <figcaption className="item-cell_info__characteristics">{almacenamiento} gb</figcaption>
      </figure>
      <div className="item-card__view">
        <a href="">Ver producto</a>
      </div>
    </section>
  )
}

export default Item;