import React from "react";
import { Icon } from "./Icon";
import { starIcons } from "@/data/data";

interface RatingStarsProps {
  breakpoint: "mobile" | "desktop";
}

const RatingStars: React.FC<RatingStarsProps> = ({ breakpoint }) => {
  return (
    <div className="flex gap-1">
      {starIcons.map((_, index) => (
        <div
          key={index}
          className={`${
            breakpoint === "mobile" ? "w-4 h-4" : "w-5 h-5"
          } bg-[#00B67A] flex items-center justify-center rounded-sm`}
        >
          <Icon name="star-icon" width={12} height={12} color="white" />
        </div>
      ))}
    </div>
  );
};

export default RatingStars;
