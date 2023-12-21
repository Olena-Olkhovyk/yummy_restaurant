import React from "react";
import Map from "./Map";
import classes from "./Restaurants.module.css";
import PopUp from "./PopUp";
const Restaurants = () => {
  return (
    <div className={classes.restaurantsContainer}>
      <h1 className={classes.title}>Restaurants</h1>
      <Map />
      <PopUp />
    </div>
  );
};
export default Restaurants;
