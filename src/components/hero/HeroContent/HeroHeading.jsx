import { useEffect, useRef } from "react";

import gsap from "gsap";

import style from "../../ui/sectionTitle/Heading.module.scss";

export const HeroHeading = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const words = titleRef.current.querySelectorAll("span");

    gsap.fromTo(
      words,
      {
        opacity: 0,
        y: 20,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.4,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <h1 ref={titleRef} className={style.title}>
      <span>Hello</span> <span>I’am</span>{" "}
      <span className={style.titleStrong}>Kristina</span>{" "}
      <span className={style.titleStrong}>Frontend</span>{" "}
      <span className={style.titleDecoration}>
        <span className={style.titleDecorationStroke}>Developer</span>
        <span className={style.titleDecorationFill}>Developer</span>
      </span>{" "}
      <span>Based In</span> <span className={style.titleStrong}>Ukraine</span>
    </h1>
  );
};
