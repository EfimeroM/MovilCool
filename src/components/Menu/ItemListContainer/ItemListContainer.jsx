import React, { useState, useEffect } from 'react'
import ItemList from "./ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getFetch } from '../../../helpers/mock';
import SideBar from '../SideBar/SideBar';

//Styles
import './ItemListContainer.css';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getFetch
      .then(result => setProductos(result.filter(producto => producto.categoria === id)))
      .catch(err => err)
  }, [id]);

  return (
    <div className='main-container'>
      <SideBar id={id} productos={productos}/>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer;