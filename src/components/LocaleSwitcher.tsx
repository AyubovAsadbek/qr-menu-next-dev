"use client";

import { useState, useEffect, useRef } from "react";
import { Icon } from "./Icon";
import Image from "next/image";
import { desktopLanguageItems } from "@/data/data";

export default function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [locale, setLocale] = useState("uz");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const language =
    locale === "uz"
      ? "O'zbekcha"
      : locale === "la"
      ? "Ўзбекча"
      : locale === "qar"
      ? "Qaraqalpaqsha"
      : locale === "en"
      ? "English"
      : locale === "ru"
      ? "Русский"
      : null;

  const handleLocaleChange = (locale: string) => {
    setIsOpen(false);
    setLocale(locale);
  };

  // Close Dropdown When Click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex-center" ref={dropdownRef}>
      <button className="flex-center" onClick={() => setIsOpen(!isOpen)}>
        <Icon name="language-icon" width={16} height={16} color="#ffe033" />
        <span className="ml-1.5 mr-0.5 text-14  leading-5 text-black-100">
          {language}
        </span>
        <Icon
          className={`${isOpen ? "rotate-180" : ""} transition-300`}
          name="arrow-down-icon"
          width={16}
          height={16}
          color="#8E9BA8"
        />
      </button>

      {/* Dropdown menu */}
      <div
        className={`absolute top-7 right-0 z-10 w-40 mt-4 overflow-hidden ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        } transition-300 top-full shadow-languageDesktop rounded-lg bg-white`}
      >
        {desktopLanguageItems.map((item, index) => (
          <button
            key={index}
            className="font-medium capitalize border-b-[1.5px] border-white-200  w-full flex-y-center justify-between transition-300 text-14 h-9 px-3 bg-white sm:hover:bg-white-300"
            onClick={() => handleLocaleChange(item.locale)}
          >
            <div className="flex items-center gap-1.5">
              <Image src={item.image} alt="Uz flag" width={20} height={20} />
              {item.label}
            </div>
            {locale === item.locale ? (
              <Icon name="tick-icon" width={16} height={16} color="black" />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}
