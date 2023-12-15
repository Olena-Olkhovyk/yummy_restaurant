import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import { selectCart } from "../../redux/slices/cartSlice";
import CartItem from "./CartItem";
const Cart = ({ isOpen }) => {
  const { items, totalPrice } = useSelector(selectCart);

  return (
    <>
      {items.length > 0 && (
        <div className={`${classes.cartBlock} ${isOpen ? classes.show : ""}`}>
          <h2 className={classes.cartTitle}>CART</h2>
          <div className={classes.itemsContainer}>
            {items.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className={classes.orderPrice}>
            <p>Price:</p>
            <p>{totalPrice}</p>
          </div>
          <button className={classes.btn}>Order</button>
        </div>
      )}
    </>
  );
};
export default Cart;
