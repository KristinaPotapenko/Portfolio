import style from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      <div className={style.loader}></div>
    </div>
  );
};
