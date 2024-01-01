import { restaurants } from "../../assets/Data/restaurants";
import classes from "./Restaurants.module.css";
import master from "../../assets/Restaurants/master.svg";
import visa from "../../assets/Restaurants/visa.svg";
import wifi from "../../assets/Restaurants/wifi.svg";
const RestaurantInfo = ({ selectedCity }) => {
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.city === selectedCity
  );
  return (
    <>
      {filteredRestaurants.map(({ image, street, hours, phone }, i) => (
        <div key={i}>
          <div className={classes.restCont}>
            <img
              src={image}
              alt=""
              className={`img-fluid ${classes.restaurantImg}`}
            />
            <p>{street}</p>
            <div className={classes.contact}>
              <p>
                Working hours:
                <br />
                {hours}
              </p>
              <p>
                Contact phone:
                <br /> {phone}
              </p>
            </div>
            <div className={classes.options}>
              <img src={master} alt="" />
              <img src={wifi} alt="" />
              <img src={visa} alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default RestaurantInfo;
