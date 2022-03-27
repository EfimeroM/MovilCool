import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Banner.scss";

export const Banner = () => {
  return (
    <Carousel id="banner" variant="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src="./img/banner/iphone.png"
          alt="First slide"
        />
        <Carousel.Caption>
            <Link to={"/catalogo/celulares"} style={{textDecoration:"none"}}>
              <div class="product" id="iphone">
                Ver productos
              </div> 
            </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./img/banner/shark.png"
          alt="Second slide"
        />
        <Carousel.Caption>
            <Link to={"/catalogo/celulares"} style={{textDecoration:"none"}}>
              <div class="product" id="shark">
                Ver productos
              </div>
            </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src="./img/banner/galaxy.png"
          alt="Third slide"
        />
        <Carousel.Caption>
            <Link to={"/catalogo/celulares"} style={{textDecoration:"none"}}>
              <div class="product" id="galaxy">
                Ver productos
              </div>
            </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
