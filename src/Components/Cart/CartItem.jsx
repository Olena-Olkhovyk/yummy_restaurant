import classes from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseItemCount,
  removeItem,
} from "../../redux/slices/cartSlice";
const CartItem = ({ id, image, name, gramm, liter, price }) => {
  const dispatch = useDispatch();
  const item = useSelector((state) =>
    state.cart.items.find((item) => item.id === id)
  );
  const minusItem = () => {
    dispatch(decreaseItemCount(id));
  };
  const plusItem = () => {
    dispatch(addToCart({ id }));
  };
  const handleRemoveItem = () => {
    if (window.confirm("Are u sure you want to delete an item?")) {
      dispatch(removeItem(id));
    }
  };
  return (
    <div key={id} className={classes.cartItems}>
      <img src={image} alt={name} className={classes.cartImage} />
      <div>
        <h4 className={classes.itemTitle}>
          {name}({gramm ? gramm : liter}
          {gramm ? "g" : "L"})
        </h4>
        <div className={classes.deleteItem} onClick={handleRemoveItem}>
          <i class="fa-solid fa-xmark"></i>
        </div>
        <div className={classes.itemAmountContainer}>
          <div className={classes.minus} onClick={minusItem}>
            <i class="fa-solid fa-minus"></i>
          </div>
          <span className={classes.itemAmount}>{item ? item.count : 1}</span>
          <div className={classes.plus} onClick={plusItem}>
            <i class="fa-solid fa-plus"></i>
          </div>
          <h5 className={classes.price}>{price}$</h5>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
