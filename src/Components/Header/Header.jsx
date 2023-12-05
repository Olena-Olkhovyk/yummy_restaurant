import classes from "./Header.module.css";
import logo from "../../assets/logo.png";
import { TfiAlignJustify } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className={classes.headerContainer}>
      <TfiAlignJustify />
      <ul>
        <li>Харків</li>
        <li>Ресторани</li>
        <li>Контакти</li>
      </ul>
      <button>-50% на заберу сам</button>
      <img src={logo} alt="restaurant's logo" />
      <button>Відстежити замовлення</button>
      <ul>
        <li>UA</li>
        <li>Вхід</li>
        <li>
          <FaShoppingCart />
          Кошик
        </li>
      </ul>
    </div>
  );
};
export default Header;
