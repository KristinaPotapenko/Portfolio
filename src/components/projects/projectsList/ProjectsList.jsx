import { useState } from "react";
import { Slider } from "../../slider/Slider";
import { Pagination } from "../../ui/pagination/Pagination";
import { SliderButton } from "../../ui/sliderButton/SliderButton";
import { ProjectsItem } from "../projectsItem/ProjectsItem";
import { projects } from "./projects";

import { motion, AnimatePresence } from "framer-motion";
import style from "./ProjectsList.module.scss";

export const ProjectsList = () => {
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
          <AnimatePresence mode="wait">
            <motion.li
              key={projects[activeSlide].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={style.projectsItem}
            >
              <ProjectsItem
                key={projects[activeSlide].id}
                image={projects[activeSlide].image}
                id={projects[activeSlide].id}
                title={projects[activeSlide].title}
                description={projects[activeSlide].description}
                href={projects[activeSlide].href}
              />
            </motion.li>
          </AnimatePresence>
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
