import { useEffect, useRef } from "react";

import gsap from "gsap";

import { createScrollHideAnimation } from "../../../scripts/animation/createScrollHideAnimation";

import style from "../../inputs/button/Button.module.scss";

export const Link = ({
  sectionRef = null,
  isOpenMobileMenu,
  onClick,
  children,
  ...props
}) => {
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
        onComplete: () => {
          createScrollHideAnimation({
            target: linkRef,
            trigger: sectionRef,
            x: 20,
            scale: 0.8,
            rotationZ: 5,
          });
        },
      }
    );
  }, [isOpenMobileMenu, sectionRef]);

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
