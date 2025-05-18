import { NavLink } from "../navLink/NavLink";

import style from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav>
      <ul className={style.navigationList}>
        <NavLink to="about" smooth="easeInOutCubic">
          About Me
        </NavLink>
        <NavLink to="skills" smooth="easeInOutCubic">
          Skills
        </NavLink>
        <NavLink to="projects" smooth="easeInOutCubic">
          Project
        </NavLink>
        <NavLink to="contact" smooth="easeInOutCubic">
          Contact me
        </NavLink>
      </ul>
    </nav>
  );
};
