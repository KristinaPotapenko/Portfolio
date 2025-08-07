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
        ease: "elastic.out(1, 0.5)",
      }
    );
  }, []);

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <img
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={imageRef}
      className={style.image}
      src={PersonImage}
      alt="Person"
    />
  );
};
