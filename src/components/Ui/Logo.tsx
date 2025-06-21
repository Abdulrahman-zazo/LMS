import { useState } from "react";

const LogoHorizental =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1750334993/logo-h_tw2neb.png";
const Logoicon =
  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1750512158/icon-site_pfgwf0.png";
import type { ImgHTMLAttributes } from "react";

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  type?: "h" | "icon";
}

const Logo = ({ type = "h", ...props }: IProps) => {
  const [loaded, setLoaded] = useState(false);

  const getSrc = () => {
    switch (type) {
      case "h":
        return LogoHorizental;
      case "icon":
        return Logoicon;
      default:
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
