import React from "react";
import "./styles/style.css"
import Slider from "react-slick";
export default function Carousel({images = [],carousel_width="288px"}) {
  
  var settings = {
    
    arrows: true,
    dots: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
        {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:false
        }
      }
    ]
  };
  
  return (
    <div id="carousel-wrap">
      <Slider {...settings}>
            {images.map(image => {
            return (
            <div className="item">
            <img width={carousel_width} height="512px" src={image} alt="App Carousel" />
          </div>)
          })}
      </Slider>
    </div>
  );
}
