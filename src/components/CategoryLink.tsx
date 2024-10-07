import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Icon } from "./Icon";

interface CategoryLinkProps {
  image: string;
  name: string;
  href: string;
  desktopIcon: string;
  dishes: number;
  active: string;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({
  image,
  name,
  href,
  desktopIcon,
  dishes,
  active,
}) => {
  return (
    <Link
      href={`${href}#${active}`}
      className="relative w-full overflow-hidden sm:max-w-[525px] h-[70px] sm:h-36 group text-white rounded-2xl p-3 sm:p-5 transition-300 
      sm:hover:bg-black-100/90 
      sm:bg-black-100/70
      sm:bg-none
      bg-category-mobile-gradient
      "
    >
      <Image
        src={image}
        alt="Category Bg Image"
        width={528}
        height={140}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-300 sm:group-hover:scale-110"
      />
      {/* Images and Names of Category */}
      <div className="absolute bottom-3 sm:bottom-5 flex-y-center gap-3">
        <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-categoryIconBg flex-center">
          <Image src={desktopIcon} alt="icon" width={30} height={30} />
        </div>
        <h3 className="font-semibold text-xl sm:text-2xl flex-y sm:leading-8 leading-6">
          {name}
          <span className="text-xs text-dishes sm:hidden block">
            {dishes} блюд
          </span>
        </h3>
      </div>
      <span className="absolute right-3 top-3 py-1.5 px-2.5 bg-white-600 text-14 leading-5 rounded-lg hidden items-center gap-1 sm:flex font-medium">
        {dishes} блюд
        <Icon
          name="arrow-right-icon"
          width={16}
          height={16}
          color="#FFFFFF80"
          className="sm:group-hover:translate-x-1 transition-200"
        />
      </span>
      <Icon
        name="arrow-right-icon"
        width={20}
        height={20}
        color="#FFFFFF99"
        className="absolute sm:hidden block right-6 top-6"
      />
    </Link>
  );
};

export default CategoryLink;
