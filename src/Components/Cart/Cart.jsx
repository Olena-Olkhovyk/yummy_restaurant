import { useSelector } from "react-redux";
import { useRef } from "react";
import classes from "./Cart.module.css";
import { selectCart } from "../../redux/slices/cartSlice";
import CartItem from "./CartItem";
import useOutsideClick from "../../hooks/useOutsideClick";

const Cart = ({ openCart, setOpenCart }) => {
  const { items, totalPrice } = useSelector(selectCart);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (openCart) {
      setOpenCart(false);
    }
  });

  return (
    <div
      ref={ref}
      className={`${classes.cartBlock} ${openCart ? classes.show : ""}`}
    >
      <h2 className={classes.cartTitle}>CART</h2>
      <div className={classes.itemsContainer}>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className={classes.orderPrice}>
        <p>Price:</p>
        <p>{totalPrice}$</p>
      </div>
      <button className={classes.btn}>Order</button>
    </div>
  );
};
export default Cart;
