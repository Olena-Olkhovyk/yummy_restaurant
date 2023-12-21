import classes from "./RecomItems.module.css";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { setItem } from "../../redux/slices/itemSlice";
import { recommendItems } from "../..//assets/Data/recommendItems";

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

  return (
    <div className={classes.itemsContainer}>
      <h1>Ми рекомендуємо</h1>
      <div className={classes.itemsCard}>
        <Slider {...settings}>
          {recommendItems.map(
            ({ id, image, name, price, ingridients, gramm }) => (
              <div className={classes.itemCard} key={id}>
                <Link to={`/item/${id}`}>
                  <div
                    onClick={() =>
                      dispatch(
                        setItem({ id, name, price, image, ingridients, gramm })
                      )
                    }
                  >
                    <img
                      src={image}
                      alt={name}
                      className={`img-fluid ${classes.itemImg}`}
                    />
                    <h1 className={classes.itemName}>{name}</h1>
                    <h3 className={classes.price}>{price}$</h3>
                  </div>
                </Link>
                <button
                  className={classes.orderButton}
                  onClick={() =>
                    dispatch(addToCart({ id, name, price, image, gramm }))
                  }
                >
                  Order
                </button>
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
};
export default Items;
