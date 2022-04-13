import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from "../../../Context/ProductContext";
import { Loading } from '../../Loading/Loading';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true)
  const { getFetch } = useContext(ProductContext);
  const {id} = useParams();

  useEffect(() => {
    getFetch
      .then(result => setProducto(result.find( producto => producto.id == id)))
      .finally(res=>setLoading(false))
      // .then(result => console.log(result.find(producto => console.log(producto))))
  }, [id]);

  return (
    <>
      {
        loading?
        <Loading />
        :
        <ItemDetail {...producto} />
      }
    </> 
  )
}

export default ItemDetailContainer;

