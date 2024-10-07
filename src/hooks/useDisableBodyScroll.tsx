import { useEffect } from "react";

const DisableBodyScroll = () => {
  useEffect(() => {
    // Add class when the component is mounted
    document.body.classList.add("overflow-y-hidden");

    // Cleanup: Remove class when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []); // Empty dependency array ensures this runs once when mounted and cleanup runs on unmount

  return null;
};

export default DisableBodyScroll;
