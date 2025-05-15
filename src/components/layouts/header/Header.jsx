import { Link } from "../../ui/link/Link";
import { Navigation } from "../../ui/navigation/Navigation";
import { ReactComponent as DownloadIcon } from "../../../assets/icons/download.svg";
import { Logo } from "../../ui/logo/Logo";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
        <Navigation />
        <Link href="/Resume.png" download>
          Resume <DownloadIcon />
        </Link>
      </div>
    </header>
  );
};
