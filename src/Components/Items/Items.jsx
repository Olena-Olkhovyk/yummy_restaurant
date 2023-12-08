import classes from "./Items.module.css";
import React from "react";
import Slider from "react-slick";
import bigpizza from "../../assets/Items/bigpizza.jpg";
import salad from "../../assets/Items/salad.jpg";
import chickenSalad from "../../assets/Items/chickenSalad.jpg";
import burger from "../../assets/Items/burger.jpg";
import { Link } from "react-router-dom";

const Items = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const items = [
    {
      image: bigpizza,
      name: "Піцца мафія",
      price: 299,
    },
    {
      image: salad,
      name: "Салат цезарь",
      price: 100,
    },
    {
      image: chickenSalad,
      name: "Салат із куркою",
      price: 80,
    },
    {
      image: burger,
      name: "Бургер",
      price: 90,
    },
  ];
  return (
    <div className={classes.itemsContainer}>
      <h1>Ми рекомендуємо</h1>
      <div className={classes.itemsCard}>
        <Slider {...settings}>
          {items.map(({ image, name, price }) => (
            <div className={classes.itemCard} key={name}>
              <Link to={`/item/${name}`}>
                <img
                  src={image}
                  alt={name}
                  className={`img-fluid ${classes.itemImg}`}
                />
                <h1 className={classes.itemName}>{name}</h1>
                <h3 className={classes.price}>{price} грн</h3>
              </Link>
              <button className={classes.orderButton}>Замовити</button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Items;
