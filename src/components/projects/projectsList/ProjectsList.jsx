import { Slider } from "../../slider/Slider";
import { Pagination } from "../../ui/pagination/Pagination";
import { SliderButton } from "../../ui/sliderButton/SliderButton";
import { ProjectsItem } from "../projectsItem/ProjectsItem";
import { projects } from "./projects";
import style from "./ProjectsList.module.scss";
import { useState } from "react";

export const ProjectsList = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  console.log(activeSlide);

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
          <ProjectsItem
            key={projects[activeSlide].number}
            image={projects[activeSlide].image}
            id={projects[activeSlide].id}
            title={projects[activeSlide].title}
            description={projects[activeSlide].description}
            href={projects[activeSlide].href}
          />
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
