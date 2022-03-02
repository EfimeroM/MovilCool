import React from 'react'
import Slider from "react-slick";
import BigCard from "../../BigCard/BigCard";
import Item from '../../Menu/ItemListContainer/ItemList/Item/Item';

export const ListProducts = ({items, settings, filter}) => {
  return (
    <Slider {...settings}>
        {
            filter==="Ofertas"?
            items.map((product) => <BigCard {...product} />) 
            :
            items.map((producto) => <Item key={producto.id} producto={producto} />) 
        }
    </Slider>
  )
}
