import PersonImage from "../../assets/images/hero.jpg";
import style from "./HeroImage.module.scss";

export const HeroImage = () => {
  return <img className={style.image} src={PersonImage} alt="Person photo" />;
};
