import { useEffect, useRef } from "react";

import gsap from "gsap";

import { skills } from "./skills";

import { SkillsItem } from "../skillsItem/SkillsItem";

import style from "./SkillsList.module.scss";

export const SkillsList = ({ section }) => {
  const skillsListRef = useRef(null);

  useEffect(() => {
    if (!skillsListRef.current) return;

    const items = skillsListRef.current.querySelectorAll("li");

    requestAnimationFrame(() => {
      gsap.fromTo(
        items,
        {
          y: 160,
          scale: 0.9,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section.current,
            start: "10% 80%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <ul className={style.skillsList} ref={skillsListRef}>
      {skills.map((skill) => {
        return (
          <SkillsItem
            key={skill.id}
            icon={skill.icon}
            skillsName={skill.skillsName}
          />
        );
      })}
    </ul>
  );
};
