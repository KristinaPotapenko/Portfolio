import style from "../../inputs/button/Button.module.scss";

export const Link = ({ children, ...props }) => {
  return (
    <a className={style.button} {...props}>
      {children}
    </a>
  );
};
