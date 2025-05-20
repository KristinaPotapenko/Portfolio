import { Link } from "react-scroll";
import style from "./NavLink.module.scss";

export const NavLink = ({ onClick, children, ...props }) => {
  return (
    <li>
      <Link className={style.navLink} onClick={() => onClick()} {...props}>
        {children}
      </Link>
    </li>
  );
};
