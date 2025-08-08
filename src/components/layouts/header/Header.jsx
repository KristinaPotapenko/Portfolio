import { useEffect, useRef, useState } from "react";

import gsap from "gsap";

import { useNoScroll } from "../../../scripts/hooks/useNoScroll";
import { createScrollHideAnimation } from "../../../scripts/animation/createScrollHideAnimation";

import { Logo } from "../../ui/logo/Logo";
import { Navigation } from "../../ui/navigation/Navigation";
import { Link } from "../../ui/link/Link";

import { ReactComponent as DownloadIcon } from "../../../assets/icons/download.svg";
import { ReactComponent as BurgerIcon } from "../../../assets/icons/burger.svg";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg";

import style from "./Header.module.scss";

export const Header = () => {
  const burgerButtonRef = useRef(null);
  const closeMobileMenuButtonRef = useRef(null);

  const headerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const headerLinksRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  useNoScroll(isOpen);

  const handleChangeOpen = (isOpen = false) => {
    setIsOpen(isOpen);
  };

  useEffect(() => {
    if (!burgerButtonRef.current) return;

    gsap.fromTo(
      burgerButtonRef.current,
      {
        y: -20,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.4,
        onComplete: () => {
          createScrollHideAnimation({
            target: burgerButtonRef,
            trigger: headerRef,
            x: 20,
            scale: 0.8,
            rotationZ: 5,
          });
        },
      }
    );
  }, []);

  useEffect(() => {
    if (!closeMobileMenuButtonRef.current) return;

    gsap.fromTo(
      closeMobileMenuButtonRef.current,
      {
        y: 10,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  }, [isOpen]);

  useEffect(() => {
    if (!headerLinksRef.current) return;

    const menu = headerLinksRef.current;
    const links = menu.querySelectorAll("nav li");

    const animateIn = () => {
      gsap.fromTo(
        menu,
        { x: "100%", opacity: 0, scale: 0.95 },
        { x: "0%", opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
      );

      gsap.fromTo(
        links,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
          delay: 0.4,
        }
      );
    };

    const animateOut = () => {
      gsap.to(menu, {
        x: "100%",
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: "power3.inOut",
      });
    };

    isOpen ? animateIn() : animateOut();
  }, [isOpen]);

  return (
    <div ref={headerRef} className="container">
      <header className={style.header}>
        {isMounted && <Logo sectionRef={headerRef} />}
        <div ref={headerLinksRef} className={style.headerLinks}>
          {isMounted && (
            <Navigation sectionRef={headerRef} onClick={handleChangeOpen} />
          )}
          {isMounted && (
            <Link
              sectionRef={headerRef}
              isOpenMobileMenu={isOpen}
              onClick={handleChangeOpen}
              href="https://kristinapotapenko.github.io/Portfolio/Resume.pdf"
              download
            >
              Resume <DownloadIcon />
            </Link>
          )}
          <button
            ref={closeMobileMenuButtonRef}
            onClick={() => setIsOpen()}
            className={style.closeButton}
          >
            <CloseIcon />
          </button>
        </div>
        <button
          ref={burgerButtonRef}
          onClick={() => setIsOpen(true)}
          className={style.headerBurger}
        >
          <BurgerIcon />
        </button>
      </header>
    </div>
  );
};
