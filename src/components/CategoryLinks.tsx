"use client";
import { CategoryData } from "@/data/data";
import Link from "next/link";
import { Icon } from "./Icon";
import { useState } from "react";

const CategoryLinks = () => {
  const [active, setActive] = useState("burger");
  return (
    <nav className="bg-white sm:rounded-xl sm:py-4 flex-y sm:shadow-sections sticky top-24 ">
      <h2 className="font-medium text-xl text-black-100 pl-4 pb-3 sm:block hidden">
        Разделы
      </h2>
      <div className="sm:flex sm:flex-col flex flex-row  gap-2 overflow-x-auto no-scrollbar px-4 sm:px-0 ">
        {CategoryData.map((category, index) => {
          const isActive = active === category.active;
          return (
            <Link
              onClick={() => setActive(category.active)}
              href={`#${category.active}`}
              key={index}
              className={`relative flex-y-center gap-2 text-14 sm:px-4 sm:py-2 px-3 py-2 text-nowrap whitespace-nowrap rounded-full sm:rounded-none transition-200 sm:bg-white sm:text-black-100 sm:hover:bg-white-400 ${
                isActive
                  ? "font-medium sm:before:content-[''] bg-blue-100 text-white"
                  : "font-normal sm:before:content-none"
              } sm:before:w-1 sm:before:h-7 sm:before:bg-blue-100 sm:before:rounded-r sm:before:absolute sm:before:left-0`}
            >
              <Icon
                name={category.mobileIcon}
                color={isActive ? "#4489F7" : "#8E9BA8"}
                width={28}
                height={28}
              />
              {category.name}
              <span
                className={`py-0.5 px-1  sm:bg-white-100 rounded-full sm:rounded text-xs ${
                  isActive
                    ? "sm:text-blue-100 bg-categoryIconBg"
                    : "sm:text-gray bg-gray-100/20"
                }`}
              >
                {category.dishes}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default CategoryLinks;
