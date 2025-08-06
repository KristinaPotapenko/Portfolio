import { useEffect, useRef } from "react";

import gsap from "gsap";

import style from "../../inputs/button/Button.module.scss";

export const Link = ({ isOpenMobileMenu, onClick, children, ...props }) => {
  const linkRef = useRef(null);

  useEffect(() => {
    if (!linkRef.current) return;

    gsap.fromTo(
      linkRef.current,
      {
        y: -40,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2,
      }
    );
  }, [isOpenMobileMenu]);

  return (
    <a
      ref={linkRef}
      className={style.button}
      onClick={() => onClick()}
      {...props}
    >
      {children}
    </a>
  );
};
