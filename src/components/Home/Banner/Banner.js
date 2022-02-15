import { Carousel } from "react-bootstrap";
import React from "react";
import "./Banner.scss";
export const Banner = () => {
  return (
    <>
      <Carousel id="banner" variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/banner/iphone.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <div class="product" id="iphone">
              Ver productos
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/banner/shark.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div class="product" id="shark">
              Ver productos
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/banner/galaxy.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div class="product" id="galaxy">
              Ver productos
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
