"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RatingStars from "./RatingStars";
import DayButton from "./DaysWrapper";
import { Icon } from "./Icon";
import SocialIcons from "./SocialIcons";
import PhoneNumberLink from "./PhoneNumberLink";
import img from "../../public/images/png/main-bg.png";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WorkingDays from "./WorkingDays";

const Hero = () => {
  return (
    <div className="sm:container mb-4 sm:mb-2">
      <Dialog>
        <div className="bg-white sm:rounded-b-2xl shadow-searchWrapper pb-4">
          {/* Hero Top */}
          <div className="relative h-52">
            <Image
              src={img}
              alt="Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-mobile-gradient sm:bg-desktop-gradient"></div>
          </div>

          {/* Hero Bottom */}
          <div className="lg:flex lg:flex-row flex-y px-4 sm:px-8">
            {/* Hero Bottom Left */}
            <div>
              {/* Profile Image */}
              <div className="w-[71px] sm:w-[100px] -mt-10 sm:-mt-12 h-[71px] sm:h-[100px] border-2 border-white-400 rounded-full relative overflow-hidden">
                <Image
                  src="/images/png/avatar.png"
                  alt="Avatar Image"
                  width={100}
                  height={100}
                />
              </div>

              <h1 className="text-2xl  font-bold sm:font-semibold leading-8 text-headingTitle mt-3 flex-y-center">
                KFC Uzbekistan
                <Link
                  href="/"
                  className="text-14 py-1 leading-none flex-y-center px-1.5 bg-statusBg rounded-md text-yellow-100 ml-2"
                >
                  $$$$
                </Link>
              </h1>
              {/* Ratings Wrapper */}
              <div className="flex-y-center gap-2  mt-1.5 cursor-pointer">
                <RatingStars breakpoint={"desktop"} />
                <span className="text-14 font-medium text-gray ">4.1</span>
              </div>

              <p className="w-full text-justify lg:text-left   text-gray font-normal text-14 leading-5 mt-6 pr-1 hidden sm:block">
                Kentucky Fried Chicken, сокращённо KFC — международная сеть
                ресторанов общественного питания, специализирующаяся на блюдах
                из курятины. Штаб-квартира компании располагается в городе
                Луисвилле в штате Кентукки.
              </p>
            </div>
            <hr className="bg-white-400 border-none h-px hidden sm:block lg:hidden mt-3" />
            {/* Hero Bottom Right */}
            <div className="w-full lg:max-w-[328px] lg:pl-4 lg:border-l border-white-400 mt-3 hidden sm:block">
              <h2 className="text-base font-medium leading-5 text-black-100 mb-3">
                График работы
              </h2>
              <DialogTrigger className="w-full focus:outline-none">
                <div className="w-full rounded-lg group transition-200 cursor-pointer pb-1 sm:hover:bg-white-300">
                  <DayButton />
                  <h3 className="text-xs pl-1 font-normal flex-y-center gap-1 text-green">
                    Открыто до
                    <span className="text-blue-100 font-medium">23:00</span>
                    <Icon
                      name="arrow-down-icon"
                      color="#4489F7"
                      width={12}
                      height={12}
                    />
                  </h3>
                </div>
              </DialogTrigger>
              <hr className="my-3 bg-white-400 border-none h-px" />
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://yandex.uz/maps/-/CDDfyK8G"
                className="flex-y-center font-medium transition duration-300 gap-2 text-14 leading-4 text-blue-100"
              >
                <Icon
                  name="location-icon"
                  width={20}
                  height={20}
                  color="#4489F7"
                />
                77XC, Shahrisabz kochasi, Tashkent
                <span className="w-6 h-6 flex-y-center justify-center rounded-md bg-white-100">
                  <Icon
                    name="arrow-icon"
                    width={16}
                    height={16}
                    color="#8E9BA8"
                  />
                </span>
              </Link>
              <div className="border border-white-400 w-[312px] h-11 my-4 rounded-lg flex-y-center justify-between px-2">
                <h5 className="text-14 font-medium leading-none text-black-100">
                  Социальные сети:
                </h5>
                <SocialIcons />
              </div>
              <PhoneNumberLink
                phoneNumber="+998914899186"
                initialShowNumber={false}
              />
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <DialogContent className="w-[344px]">
          <WorkingDays />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Hero;
