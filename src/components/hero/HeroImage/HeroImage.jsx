import { useEffect, useRef } from "react";

import gsap from "gsap";

import PersonImage from "../../../assets/images/hero.jpg";

import style from "./HeroImage.module.scss";

export const HeroImage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        delay: 0.4,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <img
      ref={imageRef}
      className={style.image}
      src={PersonImage}
      alt="Person"
    />
  );
};
