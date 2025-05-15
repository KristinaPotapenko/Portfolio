import { HeroContent } from "../../components/hero/HeroContent";
import { HeroImage } from "../../components/hero/HeroImage";

export const HeroSection = () => {
  return (
    <section className="sectionMedium">
      <div className="container">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};
