import React from "react";
import "./App.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../src/Image/Slider 1.jpg";
import image2 from "../src/Image/Slider 2.jpg";
import image3 from "../src/Image/Slider 3.jpg";

const ImageCarousel = () => {
  return (
    <>
      <Carousel autoPlay infiniteLoop>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
      </Carousel>
    </>
  );
};

export default ImageCarousel;
