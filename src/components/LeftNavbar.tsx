"use client";

import { Icon } from "./Icon";
import Image from "next/image";
import Link from "next/link";
import LocaleMobileSwitcher from "./LocaleMobileSwitcher";
import { socialLinks } from "@/data/data";
import DisableBodyScroll from "@/hooks/useDisableBodyScroll";

interface LeftNavbarProps {
  LeftNavbarOpen: boolean;
  closeLeftNavbar: () => void;
}

const LeftNavbar: React.FC<LeftNavbarProps> = ({
  LeftNavbarOpen,
  closeLeftNavbar,
}) => {
  return (
    <div
      className={`sm:hidden transition-all duration-300 block fixed w-full h-screen bg-white-100 top-0 ${
        LeftNavbarOpen ? "left-0" : "left-[-100%]"
      }`}
    >
      {LeftNavbarOpen && <DisableBodyScroll />}
      <div className="top-0 transition duration-300 bg-white w-full z-10">
        <div className="container py-4 sm:py-6 flex justify-between">
          <button
            onClick={closeLeftNavbar}
            className="w-9 h-9 bg-white-500 flex sm:hidden transition-all items-center justify-center rounded-lg active:scale-90"
          >
            <Icon height={24} width={19} name="close-icon" color="black" />
          </button>
          <Image
            src="/images/svg/logo-dark.svg"
            width={133}
            height={24}
            alt="Logo Image"
          />
        </div>
      </div>
      <div className="p-4 bg-white m-4 rounded-2xl shadow-leftNavbar">
        <h3 className="text-black-100 text-base font-semibold leading-5 mb-1">
          О нас
        </h3>
        <p className="text-black-100 text-base font-normal text-justify leading-5">
          На нашем сайте мы собираем лучшие отзывы о различных компаниях, чтобы
          помочь вам принимать осознанные решения. Независимо от того, ищете ли
          вы идеальное место для обеда, лучший вуз для обучения или надежный
          банк для финансовых нужд, мы здесь, чтобы предоставить вам ценную
          информацию на основе опыта наших пользователей.
        </p>
        <div className="border-t border-b border-white-500 flex-y-center gap-3 py-3 my-3">
          {socialLinks.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="w-10 h-10 bg-white-100 flex-center rounded-lg"
            >
              <Icon
                name={link.LinkIconName}
                width={link.width}
                height={link.height}
                color={link.color}
              />
            </Link>
          ))}
        </div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://business-dev.commeta.uz/sharh"
          className="text-xs px-6 py-2.5 font-medium flex-center gap-2 bg-yellow rounded-lg transition duration-300 text-black-100 active:scale-95 sm:hover:bg-yellow-200"
        >
          <Icon name="plus-icon" width={18} height={18} color="black-100" />
          Добавить меню
        </Link>
      </div>
      <div className="container">
        <LocaleMobileSwitcher />
      </div>
    </div>
  );
};

export default LeftNavbar;
