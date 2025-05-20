import style from "../../inputs/button/Button.module.scss";

export const Link = ({ onClick, children, ...props }) => {
  return (
    <a className={style.button} onClick={() => onClick()} {...props}>
      {children}
    </a>
  );
};
