import classes from "./Items.module.css";
import React from "react";
import Slider from "react-slick";
import bigpizza from "../../assets/Items/bigpizza.jpg";
import salad from "../../assets/Items/salad.jpg";
import chickenSalad from "../../assets/Items/chickenSalad.jpg";
import burger from "../../assets/Items/burger.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItem } from "../../redux/slices/itemSlice";
import { selectSelectedItems } from "../../redux/slices/itemSlice";

const Items = () => {
  const dispatch = useDispatch();
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
      ingridients:
        "Філе куряче sous-vide, перець болгарський, сир моцарела, ананас, часник, соус маринара, соус BBQ Сирний соус в ПОДАРУНОК!",
      gramm: 1350,
    },
    {
      image: salad,
      name: "Салат цезарь",
      price: 100,
      ingridients:
        "Креветки, авокадо, томати, мікс салатів, яйце, сир Пармезан, крутони з зеленим маслом та часником, соус Цезар",
      gramm: 275,
    },
    {
      image: chickenSalad,
      name: "Салат із куркою",
      price: 80,
      ingridients:
        "Курка, солодкий перець , червона цибуля, ананас, морква, арахіс, соус кисло-солодкий",
      gramm: 375,
    },
    {
      image: burger,
      name: "Бургер",
      price: 90,
      ingridients:
        "Котлета з яловичини, сир хохланд, салат айзберг, червона цибуля, помідор, соуси тар-тар та сирний",
      gramm: 305,
    },
  ];
  return (
    <div className={classes.itemsContainer}>
      <h1>Ми рекомендуємо</h1>
      <div className={classes.itemsCard}>
        <Slider {...settings}>
          {items.map(({ image, name, price, ingridients, gramm }) => (
            <div className={classes.itemCard} key={name}>
              <Link to={`/item/${name}`}>
                <div
                  onClick={() =>
                    dispatch(
                      setItem({ name, price, image, ingridients, gramm })
                    )
                  }
                >
                  <img
                    src={image}
                    alt={name}
                    className={`img-fluid ${classes.itemImg}`}
                  />
                  <h1 className={classes.itemName}>{name}</h1>
                  <h3 className={classes.price}>{price} грн</h3>
                </div>
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
