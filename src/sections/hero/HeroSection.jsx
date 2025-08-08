import { useEffect, useRef, useState } from "react";

import { HeroContent } from "../../components/hero/HeroContent/HeroContent";
import { HeroImage } from "../../components/hero/HeroImage/HeroImage";

import style from "./HeroSection.module.scss";

export const HeroSection = () => {
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div ref={sectionRef} className="container">
      <section className={`sectionMedium ${style.heroSection}`}>
        {isMounted && <HeroContent section={sectionRef} />}
        {isMounted && <HeroImage section={sectionRef} />}
      </section>
    </div>
  );
};
