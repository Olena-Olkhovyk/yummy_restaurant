import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
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
        <Link to="/cart">
          <li className={classes.cart}>
            <i class="fa-solid fa-cart-shopping"></i>Кошик
          </li>
        </Link>
        <span className={classes.itemsAmount}>0</span>
      </ul>
    </div>
  );
};
export default Header;
