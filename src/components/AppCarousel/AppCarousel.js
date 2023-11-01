import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './AppCarousel.scss';
import idea from "../../assests/images/idea.png"
import idea2 from "../../assests/images/idea2.png"

function AppCarousel (props) {
  return (
    <Carousel className="carousel_wrapper">
      <div>
        <img src={idea} alt="Carousel" />
      </div>
      <div>
        <img src={idea2} alt="Carousel" />
      </div>
    </Carousel>
  );
}

AppCarousel.propTypes = {};

export default AppCarousel;
