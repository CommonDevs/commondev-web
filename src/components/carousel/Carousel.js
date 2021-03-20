import React from "react";
import "./styles/style.css"
import ConfesionesScreen1 from '../../images/confesiones1.png';
import ConfesionesScreen2 from '../../images/confesiones2.png';
import ConfesionesScreen3 from '../../images/confesiones3.png';

import {
  ButtonBack,ButtonNext,
  CarouselProvider, DotGroup, Image, Slide, Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel({ ...restProps }) {
    return  <div className="carousel__container">
    <CarouselProvider
      visibleSlides={2}
      totalSlides={4}
      naturalSlideWidth={288}
    naturalSlideHeight={512}
      step={1}
    >
      <Slider >
        <Slide className="pad-left"index={0}>
          <Image src={ConfesionesScreen1} />
        </Slide>
        <Slide className="pad-left"index={1}>
          <Image src={ConfesionesScreen2} />
        </Slide>
        <Slide className="pad-left"index={2}>
          <Image src={ConfesionesScreen3} />
        </Slide>
        <Slide className="pad-left" index={3}>
          <Image src={ConfesionesScreen1} />
        </Slide>
      </Slider>
      <ButtonBack className="carousel_button left">&#8249;</ButtonBack>
      <ButtonNext className="carousel_button right">&#8250;</ButtonNext>
    </CarouselProvider>
  </div>
}
