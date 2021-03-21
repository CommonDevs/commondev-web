import React from "react";
import "./styles/style.css"
import Slider from "react-slick";
export default function Carousel({images = []}) {
  
  var settings = {
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true
  };
  return (
    <div style={{ width: "700px"}}>
      <Slider {...settings}>
            {images.map(image => {
            return (
            <div className="item">
            <img width="288px" height="512px" src={image} alt="App Carousel Image" />
          </div>)
          })}
      </Slider>
    </div>
  );
}
