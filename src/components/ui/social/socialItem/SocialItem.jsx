import style from "./SocialItem.module.scss";

export const SocialItem = ({ children, ...props }) => {
  return (
    <li>
      <a className={style.socialLink} {...props}>
        {children}
      </a>
    </li>
  );
};
