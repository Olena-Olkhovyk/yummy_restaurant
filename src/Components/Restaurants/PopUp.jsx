import classes from "./Restaurants.module.css";
import React from "react";
const PopUp = () => {
  const [open, setOpen] = React.useState(false);
  const sortList = ["Kharkiv", "Kyiv", "Dnipro"];
  return (
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
  );
};
export default PopUp;
