import React, { useEffect, useState } from "react";
import {productos} from '../../../helpers/mock'
import {listarJson} from '../../../helpers/listarJson'
import './CarrouselProducts.scss'
import { ListProducts } from "./ListProducts";
import { Loading } from "../../Loading/Loading";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <img
        src="img/icons/next.png"
        className={className}
        onClick={onClick}
        style={{width:'5vh', height: '5vh'}}
      />
    );
}
function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <img
        src="img/icons/left.png"
        className={className}
        onClick={onClick}
        style={{width:'5vh', height: '5vh'}}
      />
    );
}

const CarrouselProducts = ({slidesToShow, filter}) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        arrows: true
    }
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        listarJson(productos)
        .then((res) =>{
            if(filter==="Ofertas"){
                setItems(res.filter( product => product.oferta === true))
            }
            else if(filter==="Destacados"){
                setItems(res.filter( product => product.destacado === true))
            }
            else if(filter==="Celulares"){
                setItems(res.filter( product => product.categoria === 'celulares'))
            }
            else if(filter==="Accesorios"){
                setItems(res.filter( product => product.categoria === 'accesorios'))
            }
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [])
    
    return (
        <div className="carrousel-content">
            <div className="title-carrousel">{filter}</div>
            {
                loading===true?
                <Loading />
                :
                <ListProducts items={items} settings={settings} filter={filter} />
            }
        </div>
    )
}

export default CarrouselProducts;
