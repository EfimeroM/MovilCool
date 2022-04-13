import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { consultarProductoWsp } from '../../../../helpers/whatsapp';
import './ItemDetail.scss';

const ItemDetail = ({id, nombre, precio, almacenamiento, imageUrl, color, categoria, marca, promocion, destacada, caracteristica}) => {
  const [imgPrincipal, setImgPrincipal] = useState(imageUrl[0].img)
  return (
    <div id="item-detail">
      <div id='link'>
        <Link to={`/catalogo/${categoria}`} id="link-router"><p>{`Volver al listado`}</p></Link>
        <p>{`> ${categoria}`}</p>
      </div>
      <div id='view'>
        <div id='photo'>
          <div id='photos-list'>
            {
              imageUrl.map(res=><div onClick={()=>setImgPrincipal(res.img)}><img src={`../${res.img}`} alt="" /></div>)
            }
          </div>
          <div id='img'>
            <img src={`../${imgPrincipal}`} alt="" />
          </div>
        </div>
        <div id='data'>
          <p>{nombre}</p>
          <p id='precio'>{precio}S/.</p>
          <div id='memory-content'>
            <p>Memoria interna:</p>
            <div id='memory'>
              {
                almacenamiento.map(res=><div id='memory-card'><p>{res.almacenamiento}</p></div>)
              }
            </div>  
          </div>
          <div id='colors'>
            <p>Colores:</p>
            <div id='colors-content'>
              {
                color.map(res=><div id='color' style={{background: `${res.color}`}}></div>)
              }
            </div>
          </div>
          <button onClick={()=>{consultarProductoWsp(`"${nombre}"`)}}>Comprar ahora</button>
        </div>
      </div>
      <div id='characteristics'>
        <p>Caracteristicas</p>
        <p id='text'>{caracteristica}</p>
      </div>
    </div>
  )
}

export default ItemDetail;