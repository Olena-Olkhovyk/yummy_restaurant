import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Slider.module.css";
import banner1 from "../../assets/banners/11.jpeg";
import banner2 from "../../assets/banners/22.jpeg";
import banner3 from "../../assets/banners/33.jpeg";
const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={classes.slider}>
      <Slider {...settings}>
        <div>
          <img src={banner1} alt="banner 1" className="img-fluid" />
        </div>
        <div>
          <img src={banner2} alt="banner 2" className="img-fluid" />
        </div>
        <div>
          <img src={banner3} alt="banner 3" className="img-fluid" />
        </div>
      </Slider>
    </div>
  );
};
export default Sliders;
