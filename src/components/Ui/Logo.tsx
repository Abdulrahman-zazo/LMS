import LogoVertical from "../../assets/logo-v-d.png";
import LogoHorizental from "../../assets/logo-h.png";
import Logoicon from "../../assets/icon-site.png";
import type { ImgHTMLAttributes } from "react";

interface IProps {
  type: "v" | "h" | "icon";
  props: ImgHTMLAttributes<HTMLImageElement>;
}

const Logo = ({ type = "v", props }: IProps) => {
  switch (type) {
    case "v":
      return <img src={LogoVertical} alt="Logo H-platform" {...props} />;
    case "h":
      return <img src={LogoHorizental} alt="Logo  H-platform" {...props} />;
    case "icon":
      return <img src={Logoicon} alt="Logo H-platform" {...props} />;
  }
};

export default Logo;
