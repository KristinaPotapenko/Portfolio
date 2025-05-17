import { Link } from "react-router-dom";
import logoDark from "./../../../assets/images/logoDark.png";
import logoLight from "./../../../assets/images/logoLight.png";
import style from "./Logo.module.scss";

export const Logo = ({ isLight = false }) => {
  return (
    <Link to="/" className={`${style.logo} ${isLight && style.logoLight}`}>
      <img src={isLight ? logoLight : logoDark} alt="logo" />
      <p>Kris</p>
    </Link>
  );
};
