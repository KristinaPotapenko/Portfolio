import { NavLink } from "../navLink/NavLink";

import style from "./Navigation.module.scss";

export const Navigation = ({ ...props }) => {
  return (
    <nav>
      <ul className={style.navigationList}>
        <NavLink {...props} to="about" smooth="easeInOutCubic">
          About Me
        </NavLink>
        <NavLink {...props} to="skills" smooth="easeInOutCubic">
          Skills
        </NavLink>
        <NavLink {...props} to="projects" smooth="easeInOutCubic">
          Project
        </NavLink>
        <NavLink {...props} to="contact" smooth="easeInOutCubic">
          Contact me
        </NavLink>
      </ul>
    </nav>
  );
};
