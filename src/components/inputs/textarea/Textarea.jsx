import style from "../input/Input.module.scss";
import formStyle from "../../forms/Form.module.scss";

export const Textarea = (props) => {
  return (
    <div className={style.inputBlock}>
      <textarea
        className={`${style.input} ${props.error && style.inputError}`}
        {...props}
      ></textarea>
      {props.error && <p className={formStyle.error}>{props.error}</p>}
    </div>
  );
};
