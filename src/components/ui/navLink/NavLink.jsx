import { useRef } from "react";
import { Link } from "react-scroll";

import gsap from "gsap";

import style from "./NavLink.module.scss";

export const NavLink = ({ onClick, children, ...props }) => {
  const linkRef = useRef(null);

  const handleMouseEnter = () => {
    if (!linkRef.current) return;

    gsap.to(linkRef.current, {
      y: -4,
      scale: 1.05,
      boxShadow: "0px 10px 75px rgba(0,0,0,0.08)",
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!linkRef.current) return;

    gsap.to(linkRef.current, {
      y: 0,
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      duration: 0.3,
      ease: "power3.out",
    });
  };

  return (
    <li
      ref={linkRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link className={style.navLink} onClick={() => onClick()} {...props}>
        {children}
      </Link>
    </li>
  );
};
