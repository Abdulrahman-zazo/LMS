import LogoVertical from "../../assets/logo-v-d.png";
import LogoHorizental from "../../assets/logo-h-d.png";
import Logoicon from "../../assets/Logoicon.png";

interface IProps {
  type: "v" | "h" | "icon";
  width: number;
}

const Logo = ({ type = "v", width }: IProps) => {
  switch (type) {
    case "v":
      return (
        <img
          src={LogoVertical}
          alt="Logo H-platform"
          width={width}
          className=""
        />
      );
    case "h":
      return (
        <img
          src={LogoHorizental}
          alt="Logo  H-platform"
          width={width}
          className=""
        />
      );
    case "icon":
      return (
        <img src={Logoicon} alt="Logo H-platform" width={width} className="" />
      );
  }
};

export default Logo;
