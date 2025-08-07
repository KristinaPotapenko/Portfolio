import { useEffect, useRef } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import style from "./SectionTitle.module.scss";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionTitle = ({
  section = null,
  isLight = false,
  isTitleBlock = false,
  children,
}) => {
  let styleClass = `${style.title}`;
  if (isLight) styleClass += ` ${style.titleLight}`;
  if (isTitleBlock) styleClass += ` ${style.titleBlock}`;

  const title = children.split(" ");

  const titleRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    if (!section?.current || !titleRef?.current) return;

    document.fonts.ready.then(() => {
      gsap.set(titleRef.current, { opacity: 1 });

      const split = new SplitText(titleRef.current, {
        type: "words",
        wordsClass: "word",
      });
      splitRef.current = split;

      gsap.from(split.words, {
        scrollTrigger: {
          trigger: section.current,
          start: "top 70%",
          end: "50% 80%",
          scrub: true,
        },
        y: -100,
        opacity: 0,
        rotation: "random(-80, 80)",
        stagger: 0.1,
        duration: 1,
        ease: "back",
      });
    });

    return () => {
      splitRef.current?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [section]);

  return (
    <h2 ref={titleRef} className={styleClass}>
      {title[0] + " "}
      <span>{title.slice(1).join(" ")}</span>
    </h2>
  );
};
