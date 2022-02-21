import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from "../../../Context/ProductContext";
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { getFetch } = useContext(ProductContext);
  const {id} = useParams();

  useEffect(() => {
    getFetch
      .then(result => setProducto(result.find( producto => producto.id == id)))
      // .then(result => console.log(result.find(producto => console.log(producto))))
  }, [id]);

  return (
    <>
      <ItemDetail producto={producto} />
    </> 
  )
}

export default ItemDetailContainer;

