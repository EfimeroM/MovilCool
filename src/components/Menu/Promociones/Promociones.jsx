import React, { useState, useEffect, useContext } from 'react'
import ItemList from "../ItemListContainer/ItemList/ItemList";
import { useParams } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import { ProductContext } from "../../../Context/ProductContext";
import { FilterContext } from "../../../Context/FilterContext";

//Styles
import '../ItemListContainer/ItemListContainer.css';

const Promociones = () => {
  const { getFetch } = useContext(ProductContext);
  const { marca } = useContext(FilterContext);
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (marca) ?
      getFetch
        .then(result => setProductos(result.filter(producto => producto.promocion && producto.marca === marca)))
        .catch(err => err)
      :
      getFetch
        .then(result => setProductos(result.filter(producto => producto.promocion)))
        .catch(err => err)
  },[id, marca]);

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

export default Promociones;