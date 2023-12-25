import classes from "./Restaurants.module.css";
import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import RestaurantInfo from "./RestaurantInfo";
const PopUp = () => {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Kyiv");
  const ref = useRef();
  const cities = ["Kharkiv", "Kyiv", "Dnipro"];
  const handleCityClick = (city) => {
    setSelectedCity(city);
    setOpen(false);
  };
  useOutsideClick(ref, () => {
    if (open) setOpen(false);
  });
  return (
    <>
      <div className={classes.popUpContainer} ref={ref}>
        <h3 onClick={() => setOpen(!open)}>{selectedCity}</h3>
        <div className={classes.sortPopUp}>
          {open && (
            <ul>
              {cities.map((city, i) => (
                <li key={i} onClick={() => handleCityClick(city)}>
                  {city}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className={classes.restaurantsInfo}>
        <RestaurantInfo selectedCity={selectedCity} />
      </div>
    </>
  );
};
export default PopUp;
