import React from 'react';
import { Link } from 'react-router-dom';
import './Item.scss';

const Item = ({producto}) => {
  const {id, nombre, precio, almacenamiento, imageUrl, color, categoria} = producto;

  return (
    <div id='item-card-container'>
        <div className='item-card-info'>
            <div className='image'>
                <img src={`../${imageUrl[0].img}`} alt={nombre} />
            </div>
            <h1>{nombre}</h1>
            {
                almacenamiento?
                <div>
                    {
                        almacenamiento[1]?
                        <h2>{almacenamiento[0].almacenamiento}+</h2>
                        :
                        <h2>{almacenamiento[0].almacenamiento}</h2>
                    }
                    {
                        color[1]?
                        <>
                            <div style={{background: `${color[0].color}`}} id='color'></div><h2 id='mas'>+</h2>
                        </>
                        :
                            <div style={{background: `${color[0].color}`}} id='color'></div>
                    }
                </div>
                :
                <div id='color'>
                    <h2>{color[0].color}</h2>
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

export default Item;