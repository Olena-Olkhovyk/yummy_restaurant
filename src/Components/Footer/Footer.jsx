import classes from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <nav className={classes.gridContainer}>
        <a href="/">
          <img src={logo} className={classes.logo} alt="restaurant's logo" />
        </a>
        <a href="#">Меню ресторану</a>
        <a href="#">Новини</a>
        <a href="#">Бонусна програма</a>
        <a href="#">Організація корпоративу</a>
        <a href="#">Франчайзинг</a>
        <a href="#">Договір публічної оферти</a>
        <a href="#">Вакансії</a>
        <Link to="/restaurants">Restaurant</Link>
        <a href="#">Ресторани</a>
      </nav>
      <p className={classes.policy}>
        © 2002 - 2023 MASIA
        <br />
        Всі права захищені.
      </p>
    </div>
  );
};
export default Footer;
