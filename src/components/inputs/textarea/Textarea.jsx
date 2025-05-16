import style from "../input/Input.module.scss";

export const Textarea = (props) => {
  return <textarea className={style.input} {...props}></textarea>;
};
