import Item from "../Template/Item";
import all_product from "../../assets/all_products";
import classes from "./MenuCategory.module.css";
const MenuCategory = ({ category }) => {
  return (
    <div className={classes.itemContainer}>
      {all_product.map((item) => {
        if (category === item.category) {
          return (
            <Item
              key={item.id}
              name={item.title}
              image={item.image}
              gramm={item.gramm}
              liter={item.liter}
              price={item.price}
            />
          );
        }
        return null;
      })}
    </div>
  );
};
export default MenuCategory;
