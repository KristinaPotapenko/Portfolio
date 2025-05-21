import style from "./Slider.module.scss";

export const Slider = ({ children }) => {
  return <div className={style.slider}>{children}</div>;
};
