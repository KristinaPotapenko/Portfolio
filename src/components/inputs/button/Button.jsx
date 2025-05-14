import style from "./Button.module.scss";

export const Button = ({ children, ...props }) => {
  console.log(props);
  return (
    <button className={style.button} {...props}>
      {children}
    </button>
  );
};
