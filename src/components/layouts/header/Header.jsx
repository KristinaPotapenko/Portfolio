import { Link } from "../../ui/link/Link";
import { Navigation } from "../../ui/navigation/Navigation";
import { ReactComponent as DownloadIcon } from "../../../assets/icons/download.svg";
import { Logo } from "../../ui/logo/Logo";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className="container">
      <header className={style.header}>
        <Logo />
        <Navigation />
        <Link href="/Resume.png" download>
          Resume <DownloadIcon />
        </Link>
      </header>
    </div>
  );
};
