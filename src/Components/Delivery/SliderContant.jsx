import React from "react";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./CustomArrows";
import classes from "./Delivery.module.css";
import burger from "../../assets/zakuski_1689162823920.svg";
import pizza from "../../assets/pici_1689162770314.svg";
import rice from "../../assets/garyachi-stravi.svg";
import cocteil from "../../assets/napoyi.svg";
import salad from "../../assets/salati.svg";
import soup from "../../assets/supi.svg";
import dessert from "../../assets/deserti.svg";
import sushi from "../../assets/sushi-ta-seti_1689160630104.svg";

const SliderContent = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const deliveryItems = [
    { name: "Бургери", image: burger },
    { name: "Піци", image: pizza },
    { name: "Гарячі страви", image: rice },
    { name: "Напої", image: cocteil },
    { name: "Салати", image: salad },
    { name: "Супи", image: soup },
    { name: "Десерти", image: dessert },
    { name: "Суші та сети", image: sushi },
  ];
  return (
    <div className={classes.deliveryContainer}>
      <div className={classes.delon}>
        <h1 className={classes.deliveryTitle}>Меню доставки</h1>
        <Slider {...settings}>
          {deliveryItems.map(({ name, image }) => (
            <div key={name}>
              <div className={classes.imgContainer}>
                <img
                  src={image}
                  alt={name}
                  className={`img-fluid ${classes.itemImg}`}
                />
              </div>
              <h2 className={classes.itemName}>{name}</h2>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderContent;
