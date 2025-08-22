import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";

import { createScrollHideAnimation } from "../../../scripts/animation/createScrollHideAnimation";
import { ROUTES } from "../../../utils/routes";

import logoDark from "./../../../assets/images/logoDark.png";
import logoLight from "./../../../assets/images/logoLight.png";

import style from "./Logo.module.scss";

export const Logo = ({
  sectionRef = null,
  revert = false,
  isLight = false,
}) => {
  const logoRef = useRef(null);
  const imageRef = useRef(null);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!logoRef.current || !imageRef.current) return;

    const letters = logoRef.current.querySelectorAll("span");

    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      imageRef.current,
      { y: -20, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
    );

    tl.fromTo(
      letters,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, ease: "back.out(2.5)", duration: 1 },
      "-=0.5"
    );

    tl.eventCallback("onComplete", () => {
      const baseParams = {
        target: logoRef,
        trigger: sectionRef,
        x: -20,
        scale: 0.8,
        rotationZ: revert ? -5 : 5,
      };

      if (revert) {
        baseParams.revert = true;
      }

      createScrollHideAnimation(baseParams);
    });
  }, [sectionRef, revert]);

  const handleMouseEnter = () => {
    if (!logoRef.current || !imageRef.current) return;

    gsap.to(logoRef.current, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      rotate: 10,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!logoRef.current || !imageRef.current) return;

    gsap.to(logoRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(imageRef.current, {
      rotate: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <Link
      ref={logoRef}
      to={ROUTES.HOME}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${style.logo} ${isLight && style.logoLight}`}
    >
      <img ref={imageRef} src={isLight ? logoLight : logoDark} alt="logo" />
      <p>
        {"Kris".split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </p>
    </Link>
  );
};
