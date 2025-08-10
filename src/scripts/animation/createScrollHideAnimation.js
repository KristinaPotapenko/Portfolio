import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const createScrollHideAnimation = ({
  revert = false,
  target,
  trigger,
  x = 0,
  scale = 1.1,
  rotationZ = 0,
}) => {
  if (!target?.current || !trigger?.current) return;

  if (revert) {
    return gsap.fromTo(
      target.current,
      {
        y: 50,
        x,
        scale,
        rotationZ,
        filter: "blur(2px)",
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        rotationZ: 0,
        filter: "blur(0px)",
        ease: "power1.out",
        scrollTrigger: {
          trigger: trigger.current,
          start: "-30% 90%",
          end: "60% 96%",
          scrub: true,
        },
      }
    );
  } else {
    return gsap.to(target.current, {
      y: -50,
      x,
      opacity: 0,
      scale,
      rotationZ,
      filter: "blur(2px)",
      ease: "power1.out",
      scrollTrigger: {
        trigger: trigger.current,
        start: "12% top",
        end: "bottom top",
        scrub: true,
      },
    });
  }
};
