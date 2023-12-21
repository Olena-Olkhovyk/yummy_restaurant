import classes from "./Restaurants.module.css";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { restaurants } from "../../assets/Data/restaurants";

const PopUp = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const cities = ["Kharkiv", "Kyiv", "Dnipro"];

  useOutsideClick(ref, () => {
    if (open) setOpen(false);
  });
  return (
    <>
      <div className={classes.popUpContainer} ref={ref}>
        <h3 onClick={() => setOpen(!open)}>Kyiv</h3>
        <div className={classes.sortPopUp}>
          {open && (
            <ul>
              {cities.map((city, i) => (
                <li key={i}>{city}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
export default PopUp;
