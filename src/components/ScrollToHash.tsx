// src/components/ScrollToHash.jsx
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";

const ScrollToHash = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
