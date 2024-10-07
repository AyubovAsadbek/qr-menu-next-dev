"use client";

import { Icon } from "./Icon";
import Image from "next/image";
import Button from "./Button";

type BasketCardProps = {
  food: {
    foodName: string;
    foodImage: string;
    oldPrice?: string;
    newPrice: string;
    discount?: string;
  };
};

const BasketCard = ({ food }: BasketCardProps) => {
  return (
    <div className="h-auto z-0 text-left bg-white rounded-xl sm:hover:shadow-foodCardHover  cursor-pointer transition-300 p-3 flex-y-center gap-3">
      {/* Cart Left */}
      <div className="relative min-w-[104px] sm:h-[104px] rounded-md sm:rounded-xl border border-white-100 overflow-hidden">
        {food.discount && (
          <span className="absolute left-0 top-0 py-1 px-1.5 bg-red rounded-tl-md sm:rounded-tl-xl rounded-br-md sm:rounded-br-xl text-white text-xs">
            -{food.discount}%
          </span>
        )}
        <Image
          src={food.foodImage}
          alt="Food Image"
          width={80}
          height={80}
          className="w-full h-full"
        />
      </div>
      {/* Card Right */}
      <div className="flex flex-col w-full justify-between h-full">
        <h3 className="font-semibold text-headingTitle text-14 leading-5">
          {food.foodName}
        </h3>
        <h4 className="flex-y items-start justify-between font-semibold text-black-100">
          <span className="font-normal text-xs text-gray-100 line-through">
            {food.oldPrice && food.oldPrice + "UZS"}
          </span>
          {food.newPrice} UZS
        </h4>
        <div className="flex-y-center justify-between gap-5">
          <Button variant="counterBtn">
            <Icon name="close-icon" width={20} height={20} color="#8E9BA8" />
          </Button>

          {/* Increment and Decrement buttons */}
          <div className="w-[129px] sm:w-full min-h-9 flex justify-between items-center rounded-lg bg-white-100 p-1">
            <Button
              onClick={() => console.log("Minus clicked")}
              variant="counterBtn"
            >
              <Icon name="trash-icon" width={16} height={16} color="red" />
            </Button>
            <span className="text-14 text-black-100 font-medium">0</span>
            <Button
              onClick={() => console.log("Plus clicked")}
              variant="counterBtn"
            >
              <Icon name="plus-icon" width={16} height={16} color="red" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
