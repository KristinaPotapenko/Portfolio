import { useEffect, useRef } from "react";
import style from "./SectionDescription.module.scss";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export const SectionDescription = ({ marginBottom, children }) => {
  const descriptionRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      gsap.set(descriptionRef.current, { opacity: 1 });

      let split;
      SplitText.create(descriptionRef.current, {
        type: "words,lines",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",
        onSplit: (self) => {
          split = gsap.from(self.lines, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 1.5,
            delay: 0.2,
            ease: "expo.out",
          });
          return split;
        },
      });
    });
  }, []);

  return (
    <p
      ref={descriptionRef}
      style={{ marginBottom }}
      className={style.sectionDescription}
    >
      {children}
    </p>
  );
};
