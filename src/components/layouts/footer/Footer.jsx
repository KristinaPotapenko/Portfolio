import { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { createScrollHideAnimation } from "../../../scripts/animation/createScrollHideAnimation";

import { Logo } from "../../ui/logo/Logo";

import style from "./Footer.module.scss";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const footerRef = useRef(null);
  const descriptionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!footerRef?.current || !descriptionRef?.current) return;

    requestAnimationFrame(() => {
      createScrollHideAnimation({
        target: descriptionRef,
        trigger: footerRef,
        x: 20,
        scale: 0.8,
        rotationZ: -5,
        revert: true,
      });

      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <div ref={footerRef} className="containerDark">
      <div className="container">
        <section className={style.footer}>
          {isMounted && (
            <Logo sectionRef={footerRef} revert={true} isLight={true} />
          )}
          <p
            ref={descriptionRef}
            className={style.footerPrivacy}
            style={{ willChange: "transform, opacity, filter" }}
          >
            @2025-2026 Personal
          </p>
        </section>
      </div>
    </div>
  );
};
