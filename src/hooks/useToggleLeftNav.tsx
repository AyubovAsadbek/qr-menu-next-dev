import { useState } from "react";

const useToggleLeftNavbar = () => {
  const [isLeftNavbarOpen, setisLeftNavbarOpen] = useState(false);

  const openLeftNavbar = () => setisLeftNavbarOpen(true);
  const closeLeftNavbar = () => setisLeftNavbarOpen(false);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setisLeftNavbarOpen(false);
    }
  });

  return {
    isLeftNavbarOpen,
    openLeftNavbar,
    closeLeftNavbar,
  };
};

export default useToggleLeftNavbar;
