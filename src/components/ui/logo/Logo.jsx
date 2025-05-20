import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import logoDark from "./../../../assets/images/logoDark.png";
import logoLight from "./../../../assets/images/logoLight.png";
import style from "./Logo.module.scss";

export const Logo = ({ isLight = false }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      to={ROUTES.HOME}
      onClick={handleClick}
      className={`${style.logo} ${isLight && style.logoLight}`}
    >
      <img src={isLight ? logoLight : logoDark} alt="logo" />
      <p>Kris</p>
    </Link>
  );
};
