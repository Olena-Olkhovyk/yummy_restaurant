import classes from "./Menu.module.css";
import burger from "../../assets/zakuski_1689162823920.svg";
import pizza from "../../assets/pici_1689162770314.svg";
import rice from "../../assets/garyachi-stravi.svg";
import cocteil from "../../assets/napoyi.svg";
import salad from "../../assets/salati.svg";
import soup from "../../assets/supi.svg";
import dessert from "../../assets/deserti.svg";
import sushi from "../../assets/sushi-ta-seti_1689160630104.svg";
import { Link } from "react-router-dom";
import React from "react";
const Menu = () => {
  const [menu, setMenu] = React.useState(0);
  const categories = [
    { name: "Burger", image: burger },
    { name: "Pizza", image: pizza },
    { name: "Garyachi stravy", image: rice },
    { name: "Drinks", image: cocteil },
    { name: "Salads", image: salad },
    { name: "Soup", image: soup },
    { name: "Desserts", image: dessert },
    { name: "Sushi and sets", image: sushi },
  ];
  return (
    <div className={classes.menu}>
      <ul>
        {categories.map(({ name, image }) => (
          <Link to={`/${name}`} key={name}>
            <li
              className={`${classes.menuItem} ${
                menu === name ? classes.active : ""
              }`}
              onClick={() => setMenu(name)}
            >
              <div className={classes.imageContainer}>
                <img src={image} alt={`${name} icon`} />
              </div>
              <span>{name} </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
