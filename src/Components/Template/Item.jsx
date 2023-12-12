import classes from "./Item.module.css";
import { setItem } from "../../redux/slices/itemSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Item = ({ name, image, gramm, liter, price }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={classes.itemContainer}
      onClick={() => dispatch(setItem({ name, image, price }))}
    >
      <Link to={`/item/${name}`}>
        <img src={image} alt={name} className={classes.img} />
        <h2 className={classes.title}>
          {name}({gramm ? gramm : liter}
          {gramm ? "g" : "l"})
        </h2>
        <p className={classes.price}> {price}grn</p>
      </Link>
      <button>Add to cart</button>
    </div>
  );
};
export default Item;
