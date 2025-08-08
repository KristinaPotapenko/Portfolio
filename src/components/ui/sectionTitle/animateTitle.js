import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateTitle = (title, options = {}, reverse = false) => {
  const words = title.current.querySelectorAll("span");

  const fromVars = reverse
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: 20, scale: 0.95 };

  const toVars = reverse
    ? { opacity: 0, y: 20, scale: 0.95 }
    : { opacity: 1, y: 0, scale: 1 };

  return gsap.fromTo(words, fromVars, {
    ...toVars,
    stagger: {
      each: 0.2,
      from: reverse ? "end" : "start",
    },
    duration: 0.8,
    delay: 0.4,
    ease: "back.out(1.7)",
    ...(options?.scrollTrigger && { scrollTrigger: options.scrollTrigger }),
    onComplete: options?.onComplete,
  });
};
