import { Link } from "react-scroll";
import style from "./NavLink.module.scss";

export const NavLink = ({ children, ...props }) => {
  return (
    <li>
      <Link className={style.navLink} {...props}>
        {children}
      </Link>
    </li>
  );
};
