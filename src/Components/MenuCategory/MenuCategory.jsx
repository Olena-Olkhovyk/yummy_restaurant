import MenuItem from "../Template/MenuItem";
import all_product from "../../assets/all_products";
import classes from "./MenuCategory.module.css";
const MenuCategory = ({ category }) => {
  return (
    <div className={classes.itemContainer}>
      {all_product.map((item) => {
        if (category === item.category) {
          return (
            <MenuItem
              key={item.id}
              id={item.id}
              name={item.title}
              image={item.image}
              gramm={item.gramm}
              liter={item.liter}
              price={item.price}
              ingridients={item.ingridients}
            />
          );
        }
        return null;
      })}
    </div>
  );
};
export default MenuCategory;
