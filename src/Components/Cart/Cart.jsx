import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import { selectCart } from "../../redux/slices/cartSlice";
const Cart = ({ isOpen }) => {
  const { items } = useSelector(selectCart);
  return (
    <div className={`${classes.cartBlock} ${isOpen ? classes.show : ""}`}>
      <h1 className={classes.cartTitle}>CART</h1>
      {items.map(({ id, image, name, gramm, liter, price }) => (
        <div key={id} className={classes.cartItems}>
          <img src={image} alt={name} className={classes.cartImage} />
          <div>
            <h4>
              {name}({gramm ? gramm : liter}
              {gramm ? "g" : "L"})
            </h4>
            <p className={classes.price}>{price}</p>
            <hr />
          </div>
        </div>
      ))}
      <button className={classes.btn}>Order</button>
    </div>
  );
};
export default Cart;
