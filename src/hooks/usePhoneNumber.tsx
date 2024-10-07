import { useState } from "react";

function usePhoneNumber(
  initialNumber: string = "",
  initialShowNumber: boolean = false
) {
  const [showNumber, setShowNumber] = useState(initialShowNumber);

  const toggleShowNumber = () => {
    setShowNumber((prevState) => !prevState);
  };

  const number = initialNumber || "";

  const displayedNumber = showNumber
    ? number
    : `${number.trim().slice(0, 9)}...`;

  return { displayedNumber, showNumber, toggleShowNumber };
}

export default usePhoneNumber;
