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
      <ul className={classes.list1}>
        <li>Харків</li>
        <li>Ресторани</li>
        <li>Контакти</li>
      </ul>
      <button className={classes.saleBtn}>-50% на заберу сам</button>
      <button className={classes.trackOrder}>Відстежити замовлення</button>
      <ul className={classes.list2}>
        <li>
          <i class="fa-solid fa-location-dot"></i>
          <span className={classes.city}>Харків</span>
        </li>
        <li>
          <i class="fa-solid fa-phone"></i>
        </li>
        <li className={classes.entrance}>Вхід</li>
        <li>
          <i class="fa-regular fa-user"></i>
        </li>
        <li className={classes.cart}>
          <div className={classes.desktopContent}>
            <i class="fa-solid fa-cart-shopping"></i>
            Кошик
          </div>
        </li>
        <span className={classes.itemsAmount}>0</span>
        <li>
          <div className={classes.mobileContent}>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Header;
