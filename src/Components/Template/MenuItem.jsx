import classes from "./MenuItem.module.css";
import { setItem } from "../../redux/slices/itemSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
const Item = ({ id, name, image, gramm, liter, price, ingridients }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, image, gramm, liter, price }));
  };
  return (
    <div
      className={classes.itemContainer}
      onClick={() =>
        dispatch(setItem({ name, image, price, gramm, liter, ingridients }))
      }
    >
      <Link to={`/item/${name}`}>
        <img src={image} alt={name} className={classes.img} />
        <h2 className={classes.title}>
          {name}({gramm ? gramm : liter}
          {gramm ? "g" : "l"})
        </h2>
        <p className={classes.price}> {price}grn</p>
      </Link>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};
export default Item;
