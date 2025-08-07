import { useLayoutEffect, useRef, useState } from "react";

import { SectionTitle } from "../../components/ui/sectionTitle/SectionTitle";
import { ProjectsList } from "../../components/projects/projectsList/ProjectsList";

import style from "./ProjectsSection.module.scss";

export const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="containerDark">
      <div className="container">
        <section
          ref={sectionRef}
          className={`sectionMedium ${style.projectsSection}`}
        >
          {isMounted && (
            <SectionTitle section={sectionRef} isLight={true}>
              My Projects
            </SectionTitle>
          )}

          <ProjectsList />
        </section>
      </div>
    </div>
  );
};
