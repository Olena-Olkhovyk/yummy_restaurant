import classes from "./Menu.module.css";
import burger from "../../assets/zakuski_1689162823920.svg";
import pizza from "../../assets/pici_1689162770314.svg";
import rice from "../../assets/garyachi-stravi.svg";
import cocteil from "../../assets/napoyi.svg";
import salad from "../../assets/salati.svg";
import soup from "../../assets/supi.svg";
import dessert from "../../assets/deserti.svg";
import sushi from "../../assets/sushi-ta-seti_1689160630104.svg";
const Menu = () => {
  const categories = [
    { name: "Бургери", image: burger },
    { name: "Піци", image: pizza },
    { name: "Гарячі страви", image: rice },
    { name: "Напої", image: cocteil },
    { name: "Салати", image: salad },
    { name: "Супи", image: soup },
    { name: "Десерти", image: dessert },
    { name: "Суші та сети", image: sushi },
  ];
  return (
    <div className={classes.menu}>
      <ul>
        {categories.map(({ name, image }) => (
          <li className={classes.menuItem} key={name}>
            <div className={classes.imageContainer}>
              <img src={image} alt={`${name} icon`} />
            </div>
            <span>{name} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
