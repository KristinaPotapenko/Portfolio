import { useLayoutEffect, useRef, useState } from "react";

import { SectionTitle } from "../../components/ui/sectionTitle/SectionTitle";
import { SkillsList } from "../../components/skills/skillsList/SkillsList";

import style from "./SkillsSection.module.scss";

export const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container">
      <section ref={sectionRef} className={`sectionBig ${style.skillsSection}`}>
        {isMounted && (
          <SectionTitle section={sectionRef}>My Skills</SectionTitle>
        )}
        <SkillsList />
      </section>
    </div>
  );
};
