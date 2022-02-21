import React, { useState, useEffect, useContext } from 'react'
import ItemList from "./ItemList/ItemList";
import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { FilterContext } from "../../../Context/FilterContext";
import { ProductContext } from "../../../Context/ProductContext";

//Styles
import './ItemListContainer.css';

const ItemListContainer = () => {
  const { marca, color } = useContext(FilterContext);
  const { getFetch } = useContext(ProductContext);
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (marca) {
      getFetch
        .then(result => setProductos(result.filter(producto => producto.categoria === id && producto.marca === marca)))
        .catch(err => err)
    } else if (color){
      getFetch
        .then(result => setProductos(result.filter(producto => producto.categoria === id && producto.color === color)))
        .catch(err => err)
    } else if (marca && color) {
      getFetch
        .then(result => setProductos(result.filter(producto => producto.categoria === id && producto.marca === marca && producto.color === color)))
        .then(result => console.log(result.filter(producto => producto.categoria === id && producto.marca === marca && producto.color === color)))
        .catch(err => err)
    } else {
      getFetch
        .then(result => setProductos(result.filter(producto => producto.categoria === id)))
        .catch(err => err)
    }
  }, [id, marca, color]);

  return (
    <div className='main-container' id='main-container'>
      <SideBar id={id} productos={productos}/>
      {
        (productos.length !== 0) ?
          <ItemList productos={productos} />
          :
          <h1 className='item-list'>No hay productos con esta categor&iacute;a</h1>
      }
    </div>
  )
}

export default ItemListContainer;