import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <i className="fa-solid fa-bars log"></i>
      <ul className={classes.list}>
        <li>Харків</li>
        <li>Ресторани</li>
        <li>Контакти</li>
      </ul>
      <button className={classes.saleBtn}>-50% на заберу сам</button>
      <img src={logo} className={classes.logo} alt="restaurant's logo" />
      <button className={classes.trackOrder}>Відстежити замовлення</button>
      <ul className={classes.list}>
        <li>UA</li>
        <li>Вхід</li>
        <li className={classes.cart}>
          <FaShoppingCart />
          Кошик
        </li>
      </ul>
    </div>
  );
};
export default Header;
