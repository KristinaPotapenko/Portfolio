import { useEffect, useRef } from "react";

import gsap from "gsap";

import { useWindowWidth } from "../../../../scripts/helpers/useWindowWidth";

import { SocialItem } from "../socialItem/SocialItem";

import { ReactComponent as InstagramIcon } from "../../../../assets/icons/instagram.svg";
import { ReactComponent as TelegramIcon } from "../../../../assets/icons/telegram.svg";
import { ReactComponent as GmailIcon } from "../../../../assets/icons/gmail.svg";
import { ReactComponent as GithubIcon } from "../../../../assets/icons/github.svg";

import style from "./SocialBlock.module.scss";

export const SocialBlock = ({ section, reverse = false }) => {
  const windowWidth = useWindowWidth();
  const isTablet = windowWidth <= 1023;
  const isMobile = windowWidth <= 767;

  const socialBlockRef = useRef(null);

  useEffect(() => {
    if (!socialBlockRef.current) return;

    const items = socialBlockRef.current.querySelectorAll("li");

    const appearTl = gsap.timeline({
      defaults: { stagger: 0.2, ease: "back.out(1.7)" },
      onComplete: () => startScrollAnimation(),
    });

    appearTl.fromTo(
      items,
      { y: 30, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, delay: 0.4 }
    );

    function startScrollAnimation() {
      if (reverse) {
        gsap.fromTo(
          items,
          {
            y: 0,
            opacity: 1,
          },
          {
            y: -50,
            opacity: 0,
            stagger: 0.2,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: section.current,
              start: "50% 20%",
              end: "bottom 30%",
              scrub: true,
            },
          }
        );
      } else {
        gsap.fromTo(
          items,
          { y: -30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: section.current,
              start: isMobile ? "-10% top" : isTablet ? "-30% top" : "-40% 30%",
              end: isMobile ? "10% top" : isTablet ? "20% 25%" : "50% 65%",
              scrub: true,
            },
          }
        );
      }
    }
  }, []);

  return (
    <ul ref={socialBlockRef} className={style.socialBlock}>
      <SocialItem href="https://www.instagram.com/_k.vladimirovnaa_?igsh=MTBrY3huNDAydzFjYQ%3D%3D&utm_source=qr">
        <InstagramIcon />
      </SocialItem>
      <SocialItem href="https://t.me/kristina_potapenko">
        <TelegramIcon />
      </SocialItem>
      <SocialItem href="mailto:potapenkokristina10@gmail.com">
        <GmailIcon />
      </SocialItem>
      <SocialItem href="https://github.com/KristinaPotapenko">
        <GithubIcon />
      </SocialItem>
    </ul>
  );
};
