import { Link } from "react-router-dom";
import logo from "./../../../assets/images/logo.png";
import style from "./Logo.module.scss";

export const Logo = () => {
  return (
    <Link to="/" className={style.logo}>
      <img src={logo} alt="logo" />
      <p>Kris</p>
    </Link>
  );
};
