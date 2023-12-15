import { useSelector } from "react-redux";
import classes from "./Cart.module.css";
import { selectCart } from "../../redux/slices/cartSlice";
const Cart = ({ isOpen }) => {
  const { items, totalPrice } = useSelector(selectCart);
  return (
    <>
      {items.length > 0 && (
        <div className={`${classes.cartBlock} ${isOpen ? classes.show : ""}`}>
          <h2 className={classes.cartTitle}>CART</h2>
          <div className={classes.itemsContainer}>
            {items.map(({ id, image, name, gramm, liter, price }) => (
              <div key={id} className={classes.cartItems}>
                <img src={image} alt={name} className={classes.cartImage} />
                <div>
                  <h4 className={classes.itemTitle}>
                    {name}({gramm ? gramm : liter}
                    {gramm ? "g" : "L"})
                  </h4>
                  <p className={classes.price}>{price}</p>
                </div>
              </div>
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
