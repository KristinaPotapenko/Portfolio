import { useEffect, useRef, useState } from "react";
import cl from "classnames";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionTitle } from "../../components/ui/sectionTitle/SectionTitle";
import { ProjectsItem } from "../../components/projects/projectsItem/ProjectsItem";

import { projects } from "./projects";

import style from "./ProjectsSection.module.scss";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const blockRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!sliderRef.current || !trackRef.current || !blockRef.current) return;

    const images = trackRef.current.querySelectorAll("img");
    let loadedCount = 0;

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        initScrollTrigger();
      }
    };

    if (images.length === 0) {
      initScrollTrigger();
    } else {
      images.forEach((img) => {
        if (img.complete) onImageLoad();
        else img.addEventListener("load", onImageLoad);
      });
    }

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      gsap.killTweensOf(trackRef.current);
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", handleResize);
      images.forEach((img) => img.removeEventListener("load", onImageLoad));
    };
  }, []);

  const initScrollTrigger = () => {
    if (!sliderRef.current || !trackRef.current || !blockRef.current) return;

    const containerWidth = blockRef.current.offsetWidth;
    const trackWidth = trackRef.current.scrollWidth;
    const scrollTransform = trackWidth - containerWidth;

    gsap.to(trackRef.current, {
      x: -scrollTransform,
      ease: "none",
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top top",
        end: () => "+=" + scrollTransform,
        pin: true,
        scrub: 1,
      },
    });
  };

  return (
    <section
      ref={sliderRef}
      className={cl(style.sectionSlider, style.gsapSlider)}
    >
      <div className={style.content}>
        {isMounted && (
          <SectionTitle section={sliderRef} isLight={true}>
            My Projects
          </SectionTitle>
        )}
        <div className={cl(style.sectionSlider, style.gsapH)}>
          <div ref={blockRef} className={style.gsapBl}>
            <div className={style.gsapInner}>
              <div className={style.gsapTrack} ref={trackRef}>
                {projects.map((project) => (
                  <ProjectsItem
                    section={sliderRef}
                    key={project.id}
                    image={project.image}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    href={project.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
