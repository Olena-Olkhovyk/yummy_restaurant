import React from "react";
import Map from "./Map";
import classes from "./Restaurants.module.css";
const Restaurants = () => {
  const [open, setOpen] = React.useState(false);
  const [activeInd, setActiveInd] = React.useState(0);
  const sortList = ["Kharkiv", "Kyiv", "Dnipro"];
  return (
    <div className={classes.restaurantsContainer}>
      <h1 className={classes.title}>Restaurants</h1>
      <Map />
    </div>
  );
};
export default Restaurants;
