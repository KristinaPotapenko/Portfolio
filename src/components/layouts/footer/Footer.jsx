import { Logo } from "../../ui/logo/Logo";
import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className="containerDark">
      <div className="container">
        <section className={style.footer}>
          <Logo isLight={true} />
          <p className={style.footerPrivacy}>@2025-2026 Personal</p>
        </section>
      </div>
    </div>
  );
};
