import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { animateTitle } from "../../ui/sectionTitle/animateTitle";

import style from "../../ui/sectionTitle/Heading.module.scss";

gsap.registerPlugin(ScrollTrigger);

export const HeroHeading = ({ section }) => {
  const titleRef = useRef(null);
  const animationRef = useRef({ appear: null, scroll: null });

  useEffect(() => {
    if (!titleRef?.current) return;

    const localRef = animationRef;

    localRef.current.appear = animateTitle(titleRef, {
      onComplete: () => {
        if (section?.current) {
          localRef.current.scroll = animateTitle(
            titleRef,
            {
              scrollTrigger: {
                trigger: section.current,
                start: "40% 30%",
                end: "60% 20%",
                scrub: true,
              },
            },
            true
          );
        }
      },
    });

    return () => {
      const { appear, scroll } = localRef.current;

      if (appear) appear.kill();
      if (scroll) ScrollTrigger.getById(scroll.scrollTrigger)?.kill();
    };
  }, [section]);

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
