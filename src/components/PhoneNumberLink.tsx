// PhoneNumberLink.tsx
import React from "react";
import Link from "next/link";
import usePhoneNumber from "../hooks/usePhoneNumber";
import { Icon } from "./Icon";
import formatPhoneNumber from "@/utilities";

interface PhoneNumberLinkProps {
  phoneNumber: string;
  initialShowNumber?: boolean;
  className?: string;
}

const PhoneNumberLink: React.FC<PhoneNumberLinkProps> = ({
  phoneNumber,
  initialShowNumber = false,
  className = "",
}) => {
  const { displayedNumber, showNumber, toggleShowNumber } = usePhoneNumber(
    phoneNumber,
    initialShowNumber
  );

  return (
    <div>
      <Link
        className={`w-full h-9 bg-yellow text-14  gap-2 flex-y-center font-medium pl-4 justify-center rounded-lg sm:hover:bg-yellow-200 transition-300 relative ${className}`}
        href={`${showNumber ? `tel:${phoneNumber}` : ""}`}
      >
        <Icon name="call-icon" width={16} height={16} color="black-100" />
        {formatPhoneNumber(displayedNumber)}
        {!showNumber && (
          <button
            onClick={toggleShowNumber}
            className="bg-black-100 transition-300 text-white px-2 py-1 font-normal leading-5 rounded-md absolute right-1"
          >
            Показать
          </button>
        )}
      </Link>
    </div>
  );
};

export default PhoneNumberLink;
