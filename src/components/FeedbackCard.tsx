import { starIcons } from "@/data/data";
import Image from "next/image";
import React from "react";
import { Icon } from "./Icon";

const FeedbackCard = () => {
  return (
    <div className="bg-white p-3 flex-y gap-3 rounded-2xl h-auto shadow-feedback">
      {/* Feedback head */}
      <div className="flex-y-center gap-2">
        <div className="w-11 h-11 rounded-full overflow-hidden">
          <Image
            src={"/images/svg/feedback-profile.svg"}
            width={44}
            height={44}
            alt="Feedback profile Image"
          />
        </div>
        <div className="flex-y gap-1">
          <h3 className="text-base font-semibold leading-5 text-headingTitle">
            Умид Гафуров
          </h3>
          <div className="flex-y-center gap-0.5">
            {starIcons.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 bg-green-100 flex-center rounded-sm cursor-pointer`}
              >
                <Icon name="star-icon" width={10} height={10} color="white" />
              </div>
            ))}
            <p className="text-14 font-normal leading-5 text-gray-100 ml-1">
              15 минут назад
            </p>
          </div>
        </div>
      </div>
      {/* Feedback Content */}
      <div className="py-3 border-y border-white-100">
        <p className="text-14 font-normal leading-5 text-black-100">
          Ужасный сервис. Я максимально не доволен! Обслуживание просто кошмар!
        </p>
      </div>
      {/* Feedback Footer */}
      <div className="flex-y-center justify-between">
        <div className="flex-y-center gap-1">
          <Image
            src={"/images/svg/ProfileImages.svg"}
            width={50}
            height={50}
            alt="Images"
          />
          <p className="text-xs font-normal leading-4 text-gray-100">
            120 человек
          </p>
        </div>
        <button className="flex items-center gap-1 text-xs font-medium leading-4 text-gray-100">
          Полезно
          <Icon name="like-icon" color="#8E9BA8" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;
