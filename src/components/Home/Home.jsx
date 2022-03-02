import React from 'react'
import { Banner } from './Banner/Banner'
import CarrouselProducts from './CarrouselProducts/CarrouselProducts'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  return (
    <>
      <Banner />
      <CarrouselProducts slidesToShow={3} filter={"Ofertas"} />
      <CarrouselProducts slidesToShow={5} filter={"Destacados"} />
      <CarrouselProducts slidesToShow={5} filter={"Celulares"} />
      <CarrouselProducts slidesToShow={5} filter={"Accesorios"} />
      <br/><br/><br/>
    </>
    )
}

export default Home;