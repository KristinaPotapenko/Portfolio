import { useState } from "react";

import { projects } from "./projects";

import { Slider } from "../../wrappers/SliderWrapper/Slider";
import { Pagination } from "../../ui/pagination/Pagination";
import { SliderButton } from "../../ui/sliderButton/SliderButton";
import { AnimationWrapper } from "../../wrappers/AnimationWrapper/AnimationWrapper";
import { ProjectsItem } from "../projectsItem/ProjectsItem";

import style from "./ProjectsList.module.scss";

export const ProjectsList = ({ section }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const showNextProject = () => {
    setActiveSlide((indexSlide) => {
      if (projects.length - 1 === indexSlide) {
        return 0;
      }
      return indexSlide + 1;
    });
  };

  const showPrevProject = () => {
    setActiveSlide((indexSlide) => {
      if (indexSlide === 0) {
        return projects.length - 1;
      }

      return indexSlide - 1;
    });
  };

  return (
    <Slider>
      <SliderButton showProject={showPrevProject} isLeft={true} />
      <div className={style.projectsListWrapper}>
        <ul className={style.projectsList}>
          <AnimationWrapper projects={projects} activeSlide={activeSlide}>
            <ProjectsItem
              section={section}
              key={projects[activeSlide].id}
              image={projects[activeSlide].image}
              id={projects[activeSlide].id}
              title={projects[activeSlide].title}
              description={projects[activeSlide].description}
              href={projects[activeSlide].href}
            />
          </AnimationWrapper>
        </ul>
        <Pagination
          projects={projects}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </div>
      <SliderButton showProject={showNextProject} />
    </Slider>
  );
};
