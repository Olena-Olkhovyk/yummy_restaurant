import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSelectedItems } from "../../redux/slices/itemSlice";
const ItemDetails = () => {
  //
  const selectedItem = useSelector(selectSelectedItems);
  //   if (!selectedItem || typeof selectedItem !== "object") {
  //     // If selectedItem is null or not an object, handle this case (e.g., redirect to another page)
  //     return <p>Item not found</p>;
  //   }
  const { name, price, image } = selectedItem;

  return (
    <>
      <h1> {name} </h1>
      <p>{price}</p>
      <img src={image} alt={name} />
    </>
  );
};
export default ItemDetails;
