import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/slices/cartSlice";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const { items } = useSelector(selectCart);
  const totalItems = items.reduce((sum, item) => sum + item.count, 0);
  const handleOpenCart = (e) => {
    e.stopPropagation();
    setOpenCart((openCart) => !openCart);
  };
  return (
    <div className={classes.headerContainer}>
      <div className={classes.burger}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <Link to="/">
        <img src={logo} className={classes.logo} alt="restaurant's logo" />
      </Link>
      <button className={classes.saleBtn}>-50% на заберу сам</button>
      <button className={classes.trackOrder}>Відстежити замовлення</button>
      <ul className={classes.list2}>
        <li className={classes.entrance}>Вхід</li>
        <li>
          <i class="fa-regular fa-user"></i>
        </li>
        <div onClick={handleOpenCart}>
          <li className={classes.cart}>
            <i class="fa-solid fa-cart-shopping"></i>Кошик
          </li>
        </div>
        <span className={classes.itemsAmount}>{totalItems}</span>
      </ul>
      {items.length > 0 && (
        <Cart openCart={openCart} setOpenCart={setOpenCart} />
      )}
    </div>
  );
};
export default Header;
