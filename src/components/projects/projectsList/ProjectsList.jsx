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
    if (!panelsWrapperRef.current || !section.current) return;

    const container = panelsWrapperRef.current;
    const list = container.querySelector("ul");
    const totalWidth = list.scrollWidth;
    const viewportWidth = section.current.offsetWidth;

    const tween = gsap.to(container, {
      x: () => -(totalWidth - viewportWidth),
      ease: "none",
      scrollTrigger: {
        id: "projects-scroll",
        trigger: section.current,
        pin: true,
        start: "top top",
        scrub: 1,
        end: () => `+=${totalWidth - viewportWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      tween?.kill();
      ScrollTrigger.getById("projects-scroll")?.kill();
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
