import React from "react";
import { Icon } from "./Icon";
import { starIcons } from "@/data/data";

const FoodRating = () => {
  return (
    <div className="py-3 w-full sm:hidden flex-y-center gap-1 border-t border-white-100">
      {starIcons.map((_, index) => (
        <div
          key={index}
          className={`w-5 h-5 bg-green-100 flex-center rounded-sm cursor-pointer`}
        >
          <Icon name="star-icon" width={12} height={12} color="white" />
        </div>
      ))}
      <div className="flex justify-between gap-2 ml-0.5">
        <h3 className="text-14 font-medium leading-5 text-black-100 ">4.6</h3>
        <hr className="w-px bg-white-400 h-5 " />
        <p className="text-14 font-normal leading-5 text-gray">874 Отзывов</p>
      </div>
    </div>
  );
};

export default FoodRating;
