import { HeroContent } from "../../components/hero/HeroContent";
import { HeroImage } from "../../components/hero/HeroImage";
import style from "./HeroSection.module.scss";

export const HeroSection = () => {
  return (
    <div className="container">
      <section className={`sectionMedium ${style.heroSection}`}>
        <HeroContent />
        <HeroImage />
      </section>
    </div>
  );
};
