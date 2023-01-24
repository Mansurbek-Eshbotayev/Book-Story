import React from "react";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { CarouselItem, CarouselList, CarouselTitle } from "./CarouselStyle";
import Autor from "../../assets/images/img/autor.png";
import "./carousel.css";
export const Carousel = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <CarouselList>
      <Slider {...settings}>
        <CarouselItem>
          <CarouselTitle>Temuriylar davri adabiyoti</CarouselTitle>
        </CarouselItem>
        <CarouselItem>
          <CarouselTitle>Umaviylar davri adabiyoti</CarouselTitle>
        </CarouselItem>
        <CarouselItem>
          <CarouselTitle>Navoiylar davri adabiyoti</CarouselTitle>
        </CarouselItem>
        <CarouselItem>
          <CarouselTitle>Niyoziylar davri adabiyoti</CarouselTitle>
        </CarouselItem>
      </Slider>
    </CarouselList>
  );
};
