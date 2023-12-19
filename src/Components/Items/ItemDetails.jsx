import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedItems } from "../../redux/slices/itemSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import classes from "./ItemDetails.module.css";
const ItemDetails = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectSelectedItems);
  if (!selectedItem || typeof selectedItem !== "object") {
    return <p>Item not found</p>;
  }
  // const handleAddToCart = () => {
  //   dispatch(addToCart({ id, name, image, gramm, liter, price }));
  // };
  const { id, name, price, image, ingridients, gramm, liter } = selectedItem;
  return (
    <div className={classes.itemDetailCont}>
      <img src={image} alt={name} className={classes.img} />
      <div className={classes.description}>
        <h1 className={classes.title}>
          {" "}
          {name}({gramm ? gramm : liter}
          {gramm ? "g" : "L"}){" "}
        </h1>
        <p className={classes.price}>
          <span className={classes.ingridientTitle}>Ingridients:</span> <br />
          <span className={classes.ingridientContent}>{ingridients}</span>
        </p>
        <p className={classes.price}>Price: {price}</p>
        <button
          onClick={() =>
            dispatch(addToCart({ id, name, image, gramm, liter, price }))
          }
        >
          Order
        </button>
      </div>
    </div>
  );
};
export default ItemDetails;
