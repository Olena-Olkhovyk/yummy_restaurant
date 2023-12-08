import React from "react";
import { useSelector } from "react-redux";
import { selectSelectedItems } from "../../redux/slices/itemSlice";
import classes from "./ItemDetails.module.css";
const ItemDetails = () => {
  const selectedItem = useSelector(selectSelectedItems);
  if (!selectedItem || typeof selectedItem !== "object") {
    return <p>Item not found</p>;
  }
  const { name, price, image, ingridients, gramm } = selectedItem;
  return (
    <div className={classes.itemDetailCont}>
      <img src={image} alt={name} className={classes.img} />
      <div className={classes.description}>
        <h1 className={classes.title}>
          {" "}
          {name}({gramm}г){" "}
        </h1>
        <p className={classes.price}>Ціна: {price}</p>
        <p className={classes.price}>Інгрідієнти{ingridients}</p>
      </div>
    </div>
  );
};
export default ItemDetails;
