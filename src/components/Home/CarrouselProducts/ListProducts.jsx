import React from 'react'
import Slider from "react-slick";
import BigCard from "../../BigCard/BigCard";
import './CarrouselProducts.scss'
import ItemCarrousel from './ItemCarrousel';
export const ListProducts = ({items, settings, filter}) => {
  return (
    <Slider {...settings} className='slider'>
        {
            filter==="Ofertas"?
            items.map((product) => <BigCard {...product} />) 
            :
            items.map((producto) => <ItemCarrousel key={producto.id} producto={producto} />) 
        }
    </Slider>
  )
}
