import style from "./Input.module.scss";
import formStyle from "../../forms/Form.module.scss";

export const Input = (props) => {
  return (
    <div className={style.inputBlock}>
      <input
        className={`${style.input} ${props.error && style.inputError}`}
        {...props}
      />
      {props.error && <p className={formStyle.error}>{props.error}</p>}
    </div>
  );
};
