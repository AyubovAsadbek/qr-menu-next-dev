import { Icon } from "@/components/Icon";
import Image from "next/image";
import React from "react";

const ComingPage = () => {
  return (
    <div className="h-screen w-full bg-white flex-center overflow-hidden relative">
      {/* Top */}
      <Image
        src="/images/svg/coming-top.svg"
        alt="top Image"
        width={300}
        height={300}
        className="absolute top-[200px] sm:top-[60px] w-[327px] sm:w-[685px]"
      />
      <div className="relative z-10 flex-y items-center sm:gap-5 sm:bottom-14">
        <Image
          src="/images/svg/logo-dark.svg"
          width={340}
          height={62}
          alt="Logo Image"
          className="sm:w-[336px] w-[244px]"
        />
        <h1 className="text-base sm:text-2xl leading-7 text-center text-black-100 font-semibold flex-center gap-2">
          <Icon name="clock-icon" width={24} height={24} color="#121C25" />
          Tez orada sizni kutilmagan hodisalar kutmoqda
        </h1>
      </div>
      {/* Bottom */}
      <Image
        src="/images/svg/coming-bottom.webp"
        alt="Bottom Image"
        width={1000}
        height={100}
        className="sm:w-[1440px] absolute bottom-0 object-contain hidden sm:block"
      />
    </div>
  );
};

export default ComingPage;
