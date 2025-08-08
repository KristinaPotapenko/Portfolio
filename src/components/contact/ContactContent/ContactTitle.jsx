import { useEffect, useRef } from "react";

import { animateTitle } from "../../ui/sectionTitle/animateTitle";

import styleHeading from "../../../components/ui/sectionTitle/Heading.module.scss";

export const ContactTitle = ({ section }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (!section?.current || !titleRef?.current) return;

    animateTitle(titleRef, {
      scrollTrigger: {
        trigger: section.current,
        start: "10% 80%",
        end: "35% 50%",
        scrub: true,
      },
    });
  }, [section]);

  return (
    <h2
      ref={titleRef}
      className={`${styleHeading.title} ${styleHeading.titleStrong}`}
    >
      <span>Let’s</span>{" "}
      <span className={styleHeading.titleDecoration}>
        <span className={styleHeading.titleDecorationStroke}>talk</span>
        <span className={styleHeading.titleDecorationFill}>talk</span>
      </span>{" "}
      <span>for</span> <span>Something</span> <span>special</span>{" "}
    </h2>
  );
};
