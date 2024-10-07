import { useState } from "react";

const useToggleNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);
  const toggleNav = () => setIsNavOpen((prev) => !prev);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setIsNavOpen(false);
    }
  });

  return {
    isNavOpen,
    openNav,
    closeNav,
    toggleNav,
  };
};

export default useToggleNav;
