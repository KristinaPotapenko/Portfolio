import { NavLink } from "../navLink/NavLink";

import style from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav>
      <ul className={style.navigationList}>
        <NavLink to="about" smooth={true} duration={500}>
          About Me
        </NavLink>
        <NavLink to="skills" smooth={true} duration={500}>
          Skills
        </NavLink>
        <NavLink to="project" smooth={true} duration={500}>
          Project
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500}>
          Contact me
        </NavLink>
      </ul>
    </nav>
  );
};
