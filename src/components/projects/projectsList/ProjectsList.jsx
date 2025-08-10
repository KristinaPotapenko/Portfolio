import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "./projects";

import { ProjectsItem } from "../projectsItem/ProjectsItem";

import style from "./ProjectsList.module.scss";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsList = ({ section }) => {
  const panelsWrapperRef = useRef(null);

  useEffect(() => {
    if (!panelsWrapperRef.current) return;

    const container = panelsWrapperRef.current;
    const windowWidth = window.innerWidth;
    const scrollWidth = container.scrollWidth;

    const tween = gsap.to(container, {
      x: () => -1 * (scrollWidth - windowWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section.current,
        pin: true,
        start: "top top",
        scrub: 1,
        end: () => "+=" + (scrollWidth - windowWidth),
      },
    });

    const items = container.querySelectorAll("li");

    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      if (tween) tween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [section]);

  return (
    <div className={style.projectsListWrapper} ref={panelsWrapperRef}>
      <ul className={style.projectsList}>
        {projects.map((project) => {
          return (
            <ProjectsItem
              section={section}
              key={project.id}
              image={project.image}
              id={project.id}
              title={project.title}
              description={project.description}
              href={project.href}
            />
          );
        })}
      </ul>
    </div>
  );
};
