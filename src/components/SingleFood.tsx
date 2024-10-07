"use client";
import Image from "next/image";
import React from "react";
import DiscoutTime from "./DiscoutTime";
import { Icon } from "./Icon";
import FoodRating from "./FoodRating";
import FeedbackCard from "./FeedbackCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

type SingleFoodProps = {
  food: {
    foodName: string;
    foodImages: string[];
    oldPrice?: string;
    newPrice: string;
    discount?: string;
    description?: string;
  };
};

const SingleFood = ({ food }: SingleFoodProps) => {
  return (
    <div className="sm:pb-5 pb-36 overflow-y-auto bg-white-100 sm:bg-white">
      <div className="sticky top-0 bg-white py-4 px-5 flex-y-center sm:mb-3 border-b border-white-400">
        <h2 className="text-base font-semibold text-black-100">О блюде</h2>
      </div>
      <div className="px-0 sm:px-5 sm:flex justify-between gap-5">
        {/* Single Food Left */}
        <div className="w-full sm:w-[264px] h-[270px] sm:h-[264px] sm:rounded-2xl overflow-hidden sm:mx-0 mx-auto">
          <Swiper
            grabCursor={true}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full h-full"
          >
            {Array.isArray(food.foodImages) &&
              food.foodImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    width={264}
                    height={264}
                    src={image}
                    alt="Single Food Image"
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {/* Single Food Right */}
        <div className="w-full sm:max-w-[388px] mx-auto bg-white px-4 sm:px-0 sm:pt-0 pt-3">
          <h2 className="text-black-100 text-2xl leading-8 font-semibold mb-2">
            {food.foodName}
          </h2>
          <p className="text-xs leading-4 font-normal text-gray mb-3">
            {food.description}
          </p>
          <div className="flex justify-between w-full h-auto border border-white-300 rounded-2xl py-2.5 px-3 mb-3">
            <div className="flex-y gap-0.5 w-20">
              <h4 className="text-xs font-normal leading-4 text-gray">
                Килокалория
              </h4>
              <h5 className="text-14 text-black-100 leading-5 font-medium">
                350
                <span className="text-xs leading-4 text-gray-100 ml-0.5">
                  ккал
                </span>
              </h5>
            </div>
            <div className="flex-y gap-0.5 w-20 pl-5 border-l border-white-300">
              <h4 className="text-xs font-normal leading-4 text-gray">Жиры</h4>
              <h5 className="text-14 text-black-100 leading-5 font-medium">
                80
                <span className="text-xs leading-4 text-gray-100 ml-0.5">
                  гр
                </span>
              </h5>
            </div>
            <div className="flex-y gap-0.5 w-20 pl-5 border-l border-white-300">
              <h4 className="text-xs font-normal leading-4 text-gray">Сахар</h4>
              <h5 className="text-14 text-black-100 leading-5 font-medium">
                130
                <span className="text-xs leading-4 text-gray-100 ml-0.5">
                  гр
                </span>
              </h5>
            </div>
          </div>
          <div className="hidden sm:flex-y-center gap-1">
            <span className="font-normal text-14 leading-5 text-gray-100 line-through">
              {food.oldPrice} UZS
            </span>
            <span className="font-normal text-14 leading-5 text-red">
              -{food.discount}%
            </span>
          </div>
          <h3 className="sm:block hidden text-xl leading-6 font-semibold text-blue-100 mb-2">
            {food.newPrice} UZS
          </h3>
          <DiscoutTime customClass="hidden sm:flex-y-center justify-between" />
          <FoodRating />
        </div>
        <div className="sm:hidden block px-4">
          {/* Add Feedback button */}
          <button className="flex-center gap-2 py-2.5 bg-blue-100 w-full transition-200 active:scale-95 my-4 rounded-lg text-14 text-white font-medium leading-5 focus:outline-none">
            <Icon name="star-icon" width={20} height={20} color="white" />
            Оставить отзыв
          </button>
          {/* Filter Feedbacks */}
          <div className="flex gap-3">
            <button className="p-2.5 bg-white rounded-lg flex-y-center gap-1.5 text-14 font-medium leading-5 text-black-100 w-full ">
              <Icon name="star-icon" width={16} height={16} color="#8E9BA8" />
              Сортировать по
              <Icon
                name="arrow-right-icon"
                width={18}
                height={18}
                color="#8E9BA8"
                className="ml-auto"
              />
            </button>
            <button className="bg-white p-2.5 flex-center rounded-lg">
              <Icon name="filter-icon" width={20} height={20} color="#121C25" />
            </button>
          </div>
          {/* Feedbacks */}
          <div className="mt-4 flex-y gap-4">
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </div>
        </div>
      </div>

      {/* Food Bottom Wrapper */}
      <div className="sm:hidden flex-y fixed bottom-0 bg-white p-4 w-full shadow-mobileFoodBottom">
        <DiscoutTime customClass="flex justify-between" />
        <div className="mt-4 flex justify-between">
          <div>
            <div className="sm:hidden flex-y-center gap-1">
              <span className="font-normal text-xs leading-4 text-gray-100 line-through">
                {food.oldPrice} UZS
              </span>
              <span className="font-normal text-xs leading-4 text-red">
                -{food.discount}%
              </span>
            </div>
            <h3 className="text-base leading-5 font-semibold text-black-100">
              {food.newPrice} UZS
            </h3>
          </div>
          <button className="flex-center gap-2 py-2.5 px-5 rounded-lg bg-yellow text-black-100 text-xs font-medium leading-4 focus:outline-none">
            <Icon name="plus-icon" width={16} height={16} color="#121C25" />
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
