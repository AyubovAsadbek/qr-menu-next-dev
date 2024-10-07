"use client";

import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default Navbar;
