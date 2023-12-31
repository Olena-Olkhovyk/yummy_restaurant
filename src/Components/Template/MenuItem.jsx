import classes from "./MenuItem.module.css";
import { setItem } from "../../redux/slices/itemSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/slices/cartSlice";
const Item = ({ id, name, image, gramm, liter, price, ingridients }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={classes.itemContainer}
      onClick={() =>
        dispatch(setItem({ id, name, image, price, gramm, liter, ingridients }))
      }
    >
      <Link to={`/item/${name}`}>
        <img src={image} alt={name} className={classes.img} />
        <h2 className={classes.title}>{name}</h2>
        <span>({gramm ? `${gramm}g` : `${liter}L`})</span>
        <p className={classes.price}> {price}$</p>
      </Link>
      <button
        onClick={() =>
          dispatch(addToCart({ id, name, image, gramm, liter, price }))
        }
      >
        Add to cart
      </button>
    </div>
  );
};
export default Item;
