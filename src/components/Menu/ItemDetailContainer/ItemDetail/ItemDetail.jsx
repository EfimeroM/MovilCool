import React from 'react'
import { useNavigate } from 'react-router-dom';

import './ItemDetail.css';

const ItemDetail = ({producto}) => {
  const {id, nombre, precio, almacenamiento, imageUrl, color, categoria, marca, promocion, destacada, caracteristica} = producto;
  let navigate = useNavigate();

  return (
    <div className="container">

      <div className="container__Specifications">
        <div className="container__breadcrumb">
          <span><b><button onClick={() => {
            navigate(`/catalogo/${categoria}`);
          }}>Volver al listado &gt; </button></b></span><span> Celulares y Smartphones</span>
        </div>
        <div className="container__details">
          <div className="details__images">
            {/* <img className="side_image" src="./assets/image 30.png" alt="small1" /> */}
            <div className="main_image_container">
              <img className="main_image" src={imageUrl} alt="big" />
            </div>
            {/* <img className="side_image" src="./assets/image 31.png" alt="small2" />
            <img className="side_image" src="./assets/image 32.png" alt="small3" />
            <img className="side_image" src="./assets/image 33.png" alt="small4" /> */}
          </div>
          <div className="details__info">
            <section className="info__cell_phone">
              <h3 className="main_title">{marca}</h3>
              <h3 className="main_subtitle">{nombre}</h3>
            </section>
            {
              almacenamiento &&
                <section className="info__memory">
                  <h5 className="title">Memoria Interna:</h5>
                  <span className="memory__button">{almacenamiento} GB</span>
                </section>
            }
            <section className="info__color">
              <h5 className="title">Color:</h5>
              <span className='span-color'>{color}</span>
            </section>
            <section className="info__payment">
              <button className="payment__button">Comprar ahora</button>
            </section>
          </div>
        </div>
        <section className="container__characteristics">
          <h5 className="title">Características</h5>
          <p className="characteristics__info">
            {caracteristica}
          </p>
        </section>
      </div>
    </div>
  )
}

export default ItemDetail;