import React from "react";
import Map from "./Map";
import classes from "./Restaurants.module.css";
const Restaurants = () => {
  const [open, setOpen] = React.useState(false);
  const sortList = ["Kharkiv", "Kyiv", "Dnipro"];
  return (
    <div className={classes.restaurantsContainer}>
      <h1 className={classes.title}>Restaurants</h1>
      <Map />
      <div className={classes.popUpContainer}>
        <h3 onClick={() => setOpen(!open)}>Kyiv</h3>
        <div className={classes.sortPopUp}>
          {open && (
            <ul>
              {sortList.map((list, i) => (
                <li key={i}>{list}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Restaurants;
