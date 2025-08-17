import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./SectionDescription.module.scss";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionDescription = ({
  section = null,
  isHorizontalSection = false,
  reverse = false,
  marginBottom,
  isClamped = false,
  children,
}) => {
  const maxHeight = isClamped ? 80 : null;
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isHorizontalSection) return;

    document.fonts.ready.then(() => {
      gsap.set(contentRef.current, { opacity: 1 });

      let split;
      SplitText.create(contentRef.current, {
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
            onComplete: () => {
              if (section?.current) {
                if (reverse) {
                  gsap.to(self.lines, {
                    yPercent: -150,
                    opacity: 0,
                    stagger: 0.1,
                    delay: 0.4,
                    ease: "power1.out",
                    scrollTrigger: {
                      trigger: section.current,
                      start: "60% 40%",
                      end: "bottom 20%",
                      scrub: true,
                    },
                  });
                } else {
                  gsap.fromTo(
                    self.lines,
                    { y: -150, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      stagger: 0.1,
                      delay: 0.2,
                      ease: "power1.out",
                      scrollTrigger: {
                        trigger: section.current,
                        start: "top 60%",
                        end: "35% 65%",
                        scrub: true,
                      },
                    }
                  );
                }
              }
            },
          });
          return split;
        },
      });
    });
  }, [section]);

  useEffect(() => {
    if (contentRef.current) {
      setIsOverflowing(contentRef.current.scrollHeight > maxHeight);
    }
  }, [children, isClamped]);

  return (
    <div className={styles.descriptionWrapper} style={{ marginBottom }}>
      <div
        ref={contentRef}
        className={`${styles.description} ${expanded ? styles.expanded : ""}`}
        style={{ maxHeight: expanded ? "none" : `${maxHeight}px` }}
      >
        {children}
      </div>

      {isOverflowing && (
        <button
          className={styles.toggleButton}
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};
