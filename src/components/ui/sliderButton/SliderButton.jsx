import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";
import style from "./SliderButton.module.scss";

export const SliderButton = ({ isLeft, showProject, ...props }) => {
  return (
    <button
      onClick={showProject}
      {...props}
      className={`${style.sliderButton} ${isLeft && style.sliderButtonLeft}`}
    >
      <ArrowIcon />
    </button>
  );
};
