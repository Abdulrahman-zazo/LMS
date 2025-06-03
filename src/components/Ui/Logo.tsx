import { useState } from "react";
import LogoVertical from "../../assets/logo-v-d.png";
import LogoHorizental from "../../assets/logo-h.png";
import Logoicon from "../../assets/icon-site.png";
import type { ImgHTMLAttributes } from "react";

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  type?: "v" | "h" | "icon";
}

const Logo = ({ type = "v", ...props }: IProps) => {
  const [loaded, setLoaded] = useState(false);

  const getSrc = () => {
    switch (type) {
      case "h":
        return LogoHorizental;
      case "icon":
        return Logoicon;
      default:
        return LogoVertical;
    }
  };

  return (
    <div className="relative inline-block">
      {!loaded && (
        <div
          className={`animate-pulse bg-neutral-300 dark:bg-gray-600 rounded ${
            props.className?.includes("w-") ? "" : "w-28"
          } ${props.className?.includes("h-") ? "" : "h-10"}`}
        />
      )}
      <img
        loading="eager"
        src={getSrc()}
        alt="Logo H-platform"
        {...props}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`${loaded ? "block" : "hidden"} ${props.className || ""}`}
      />
    </div>
  );
};

export default Logo;
