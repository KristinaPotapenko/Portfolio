import { useEffect, useRef } from "react";
import gsap from "gsap";

import { NavLink } from "../navLink/NavLink";

import style from "./Navigation.module.scss";

export const Navigation = ({ ...props }) => {
  const navigationRef = useRef(null);

  useEffect(() => {
    if (!navigationRef.current) return;

    const navigationElements = navigationRef.current.querySelectorAll("a");

    gsap.set(navigationElements, { y: -80, opacity: 0 });

    const tl = gsap.timeline();

    navigationElements.forEach((elem, index) => {
      tl.to(
        elem,
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "back.out(2.5)",
        },
        index * 0.15
      );
    });
  }, []);

  return (
    <nav>
      <ul ref={navigationRef} className={style.navigationList}>
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
