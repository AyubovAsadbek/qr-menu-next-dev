"use client";
import Image from "next/image";
import { Icon } from "./Icon";
import Button from "./Button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper/modules";

type FoodCardProps = {
  food: {
    foodName: string;
    foodImages: string[];
    oldPrice?: string;
    newPrice: string;
    discount?: string;
  };
};

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <div className="h-auto sm:h-[104px] z-0 text-left bg-white rounded-xl sm:hover:shadow-foodCardHover  cursor-pointer transition-300 p-3 sm:flex-y-center gap-3 foodCard">
      {/* Cart Left */}
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="relative min-w-20 sm:w-20 sm:h-20 rounded-md sm:rounded-xl border border-white-100 overflow-hidden sm:mb-0 mb-3"
      >
        {food.discount && (
          <span className="absolute left-0 top-0 py-1 px-1.5 bg-red rounded-tl-md sm:rounded-tl-xl rounded-br-md sm:rounded-br-xl text-white text-xs z-10">
            -{food.discount}%
          </span>
        )}
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="FoodCardSwiper"
        >
          {Array.isArray(food.foodImages) &&
            food.foodImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt="Food Image"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {/* Card Right */}
      <div className="flex flex-col justify-between h-[130px] sm:h-full">
        <h3 className="font-semibold text-headingTitle text-14 leading-5">
          {food.foodName}
        </h3>
        <h4 className="flex-y items-start justify-between font-semibold text-black-100">
          <span className="font-normal text-xs text-gray-100 line-through">
            {food.oldPrice && food.oldPrice + "UZS"}
          </span>
          {food.newPrice} UZS
        </h4>
        <div
          className="sm:hidden"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Button
            variant="addBtn"
            icon={
              <Icon name="plus-icon" width={16} height={16} color="#121C25" />
            }
            onClick={() => {
              console.log("Add button clicked");
            }}
          >
            Добавить
          </Button>
          {/* Increment and Decrement buttons
          {/* <div className="w-full min-h-9 flex justify-between items-center mt-3 rounded-lg bg-white-100 p-1">
            <Button
              onClick={() => {
                console.log("Minus clicked");
              }}
              variant="counterBtn"
            >
              <Icon name="minus-icon" width={16} height={16} color="black" />
            </Button>
            <span className="text-14 text-black-100 font-medium">0</span>
            <Button
              onClick={() => {
                console.log("Plus clicked");
              }}
              variant="counterBtn"
            >
              <Icon name="plus-icon" width={16} height={16} color="black" />
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
