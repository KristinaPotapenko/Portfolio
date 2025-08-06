import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";

import { ROUTES } from "../../../utils/routes";

import logoDark from "./../../../assets/images/logoDark.png";
import logoLight from "./../../../assets/images/logoLight.png";

import style from "./Logo.module.scss";

export const Logo = ({ isLight = false }) => {
  const logoRef = useRef(null);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!logoRef.current) return;

    const letters = logoRef.current.querySelectorAll("span");
    const image = logoRef.current.querySelector("img");

    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      image,
      {
        y: -20,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      letters,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        ease: "back.out(2.5)",
        duration: 1,
      },
      "-=0.5"
    );
  }, []);

  return (
    <Link
      ref={logoRef}
      to={ROUTES.HOME}
      onClick={handleClick}
      className={`${style.logo} ${isLight && style.logoLight}`}
    >
      <img src={isLight ? logoLight : logoDark} alt="logo" />
      <p>
        {"Kris".split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </p>
    </Link>
  );
};
