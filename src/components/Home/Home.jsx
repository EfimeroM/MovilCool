import React from 'react'
import { Banner } from './Banner/Banner'
import CarrouselProducts from './CarrouselProducts/CarrouselProducts'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';
const Home = () => {
  const screenPc = useMediaQuery({ query: '(min-width: 820px)' })
  const screenMobile = useMediaQuery({ query: '(max-width: 450px)' })

  return (
    <>
        <Banner />
        {
        screenPc? //hasta 820px
        <>
            <CarrouselProducts slidesToShow={3} filter={"Ofertas"} />
            <CarrouselProducts slidesToShow={5} filter={"Destacados"} />
            <CarrouselProducts slidesToShow={5} filter={"Celulares"} />
            <CarrouselProducts slidesToShow={5} filter={"Accesorios"} />
        </>
        :screenMobile? //hasta 450
        <>
            <CarrouselProducts slidesToShow={1} filter={"Ofertas"} />
            <CarrouselProducts slidesToShow={2} filter={"Destacados"} />
            <CarrouselProducts slidesToShow={2} filter={"Celulares"} />
            <CarrouselProducts slidesToShow={2} filter={"Accesorios"} />
        </>
        : //intermedio
        <>
            <CarrouselProducts slidesToShow={2} filter={"Ofertas"} />
            <CarrouselProducts slidesToShow={3} filter={"Destacados"} />
            <CarrouselProducts slidesToShow={3} filter={"Celulares"} />
            <CarrouselProducts slidesToShow={3} filter={"Accesorios"} />
        </>
        }
        <br/><br/><br/>
    </>
    )
}

export default Home;