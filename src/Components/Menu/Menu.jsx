import classes from "./Menu.module.css";
import burger from "../../assets/burger_122704.png";
import pizza from "../../assets/Pizza_icon-icons.com_68706.png";
import rice from "../../assets/Rice_Bowl_icon-icons.com_68695.png";
import cocteil from "../../assets/Sex_on_the_Beach_25441.png";
import salad from "../../assets/iconfinder-healthcare-and-medicalorganicvegansaladhealthy-foodavocadodietvegetarianfoodfruit-4394779_119506.png";
import soup from "../../assets/if-food-c214-2427858_85695.png";
import dessert from "../../assets/if-food-c228-2427887_85696.png";
import sushi from "../../assets/sushi_maki_chopsticks_asian_food_icon_142412.png";
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
