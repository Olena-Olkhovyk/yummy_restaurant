import classes from "./Restaurants.module.css";
import React, { useRef } from "react";
import useOutsideClick from "../useOutsideClick";

const PopUp = () => {
  const [open, setOpen] = React.useState(false);
  const ref = useRef();
  const sortList = ["Kharkiv", "Kyiv", "Dnipro"];

  useOutsideClick(ref, () => {
    if (open) setOpen(false);
  });
  return (
    <div className={classes.popUpContainer} ref={ref}>
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
