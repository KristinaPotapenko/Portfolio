import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const createScrollHideAnimation = ({
  target,
  trigger,
  x = 0,
  scale = 1.1,
  rotationZ = 0,
}) => {
  console.log({
    target,
    trigger,
    x,
    scale,
    rotationZ,
  });

  if (!target?.current || !trigger?.current) return;

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
};
